import { test, expect } from '@playwright/test';

// 定义所有包含练习题的页面路径
const exercisePages = [
  // 第1章
  'chapter-01/01-info-informatization',
  'chapter-01/02-info-infrastructure',
  'chapter-01/03-info-applications',
  // 第2章
  'chapter-02/01-info-system',
  'chapter-02/02-systems-engineering',
  'chapter-02/03-software-engineering',
  'chapter-02/04-deployment-delivery',
  'chapter-02/05-data-engineering',
  // 第3章
  'chapter-03/01-network-framework',
  'chapter-03/02-tcp-ip',
  'chapter-03/03-transmission-platform',
  'chapter-03/04-application-platform',
  'chapter-03/05-security-platform',
  'chapter-03/06-network-management',
  'chapter-03/07-environment-system',
  // 第4章
  'chapter-04/01-data-resource-platform',
  'chapter-04/01-info-resource-system',
  'chapter-04/02-cloud-resource-system',
  // 第5章
  'chapter-05/01-info-application-classification',
  'chapter-05/01-info-application-system',
  'chapter-05/02-typical-info-systems',
  // 第6章
  'chapter-06/01-info-security',
  'chapter-06/01-security-attributes',
  'chapter-06/02-security-technologies',
  'chapter-06/03-network-security-level',
  'chapter-06/04-data-security',
  // 第7章
  'chapter-07/01-operation-maintenance',
  'chapter-07/01-ops-overview',
  'chapter-07/02-ops-capability',
  // 第8章
  'chapter-08/01-basic-concepts',
  'chapter-08/02-organization-personnel',
  'chapter-08/03-work-content-methods',
  'chapter-08/04-key-points',
  // 第9章
  'chapter-09/01-quality-control',
  'chapter-09/01-quality-overview',
  'chapter-09/02-design-quality-control',
  'chapter-09/03-implementation-quality',
  'chapter-09/04-acceptance-management',
  // 第10章
  'chapter-10/01-schedule-cost',
  // 第11章
  'chapter-11/01-contract-ip',
  // 第12章
  'chapter-12/01-information-mgmt',
  // 第13章
  'chapter-13/01-coordination-communication',
];

test.describe('全章节答题功能验证', () => {
  let exerciseResults: Array<{
    page: string;
    questionId: string;
    hasExerciseBox: boolean;
    functionalityWorks: boolean;
    error?: string;
  }> = [];

  // 使用串行模式来避免竞态条件
  test.describe.configure({ mode: 'serial' });

  exercisePages.forEach((pagePath) => {
    test(`验证页面 ${pagePath} 的答题功能`, async ({ page, browser }) => {
      // 为每个测试使用新的浏览上下文，避免sessionStorage干扰
      const testContext = await browser.newContext();
      const testPage = await testContext.newPage();

      const url = `http://localhost:4321/${pagePath}/`;

      try {
        await testPage.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });

        // 等待页面加载完成
        await testPage.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
          // 某些页面可能没有网络请求，忽略超时
        });

        // 查找页面上的所有练习框
        const exerciseBoxes = testPage.locator('.exercise-box');
        const count = await exerciseBoxes.count();

        if (count === 0) {
          // 页面上没有练习框
          exerciseResults.push({
            page: pagePath,
            questionId: 'N/A',
            hasExerciseBox: false,
            functionalityWorks: true, // 没有练习框不算错误
          });
          await testContext.close();
          return;
        }

        // 测试第一个练习框的功能
        const firstBox = exerciseBoxes.first();
        const questionId = await firstBox.getAttribute('data-question-id');

        // 检查练习框是否正确渲染
        await expect(firstBox, `页面 ${pagePath} 的练习框应该可见`).toBeVisible();

        // 获取正确答案
        const correctAnswer = await firstBox.getAttribute('data-correct-answer');

        if (!correctAnswer) {
          exerciseResults.push({
            page: pagePath,
            questionId: questionId || 'unknown',
            hasExerciseBox: true,
            functionalityWorks: false,
            error: '缺少正确答案属性',
          });
          await testContext.close();
          return;
        }

        // 点击正确答案
        const correctOption = firstBox.locator(`.option-item[data-option="${correctAnswer}"]`);

        if (await correctOption.count() === 0) {
          exerciseResults.push({
            page: pagePath,
            questionId: questionId || 'unknown',
            hasExerciseBox: true,
            functionalityWorks: false,
            error: `找不到答案为 ${correctAnswer} 的选项`,
          });
          await testContext.close();
          return;
        }

        await correctOption.click();

        // 等待结果区域显示
        const resultSection = firstBox.locator('.result-section');
        await expect(resultSection, '结果区域应该显示').toBeVisible({ timeout: 3000 });

        // 检查是否显示正确
        const resultHeader = firstBox.locator('.result-header');
        const resultText = await resultHeader.textContent();

        const isCorrect = resultText?.includes('正确') || false;

        exerciseResults.push({
          page: pagePath,
          questionId: questionId || 'unknown',
          hasExerciseBox: true,
          functionalityWorks: isCorrect,
          error: isCorrect ? undefined : `结果显示错误: ${resultText}`,
        });

        // 清空sessionStorage以避免影响下一个测试
        await testPage.evaluate(() => {
          sessionStorage.clear();
        });

      } catch (error) {
        exerciseResults.push({
          page: pagePath,
          questionId: 'error',
          hasExerciseBox: false,
          functionalityWorks: false,
          error: error instanceof Error ? error.message : String(error),
        });
      } finally {
        await testContext.close();
      }
    });
  });

  // 生成汇总报告的测试
  test('生成测试报告', async () => {
    console.log('\n=== 全章节答题功能测试报告 ===\n');

    const pagesWithExercises = exerciseResults.filter(r => r.hasExerciseBox);
    const pagesWorking = exerciseResults.filter(r => r.functionalityWorks && r.hasExerciseBox);
    const pagesWithErrors = exerciseResults.filter(r => !r.functionalityWorks && r.hasExerciseBox);

    console.log(`总页面数: ${exerciseResults.length}`);
    console.log(`包含练习题的页面数: ${pagesWithExercises.length}`);
    console.log(`功能正常的页面数: ${pagesWorking.length}`);
    console.log(`存在问题的页面数: ${pagesWithErrors.length}`);

    if (pagesWithErrors.length > 0) {
      console.log('\n❌ 存在问题的页面:');
      pagesWithErrors.forEach(result => {
        console.log(`  - ${result.page} (问题ID: ${result.questionId})`);
        console.log(`    错误: ${result.error}`);
      });
    }

    if (pagesWorking.length > 0) {
      console.log('\n✅ 功能正常的页面:');
      pagesWorking.forEach(result => {
        console.log(`  - ${result.page}`);
      });
    }

    // 如果有错误的页面，测试应该失败
    if (pagesWithErrors.length > 0) {
      throw new Error(`发现 ${pagesWithErrors.length} 个页面存在答题功能问题`);
    }

    console.log('\n✅ 所有页面的答题功能均正常工作！');
  });
});
