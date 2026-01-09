import { test, expect } from '@playwright/test';

test('IPv6练习题功能验证', async ({ page }) => {
  await page.goto('http://localhost:4321/chapter-03/02-tcp-ip/');

  // 等待页面加载
  await page.waitForLoadState('networkidle');

  // 找到所有练习框
  const exerciseBoxes = page.locator('.exercise-box');
  const count = await exerciseBoxes.count();
  console.log(`找到 ${count} 个练习框`);

  // IPv6那道题应该是第4个（索引3）
  const ipv6Box = exerciseBoxes.nth(3);

  // 显示问题文本
  const question = await ipv6Box.locator('.question').textContent();
  console.log(`问题: ${question}`);

  // 检查练习框是否有data-question-id
  const questionId = await ipv6Box.getAttribute('data-question-id');
  console.log(`questionId: ${questionId}`);

  // 点击选项B（正确答案：128位）
  const optionB = ipv6Box.locator('.option-item[data-option="B"]');
  await optionB.click();

  // 等待结果显示
  const resultSection = ipv6Box.locator('.result-section');
  await expect(resultSection, '结果区域应该显示').toBeVisible({ timeout: 3000 });

  // 检查结果
  const resultHeader = ipv6Box.locator('.result-header');
  const resultText = await resultHeader.textContent();
  console.log(`结果: ${resultText}`);

  // 验证是否显示正确
  await expect(resultHeader).toContainText('回答正确');
  await expect(optionB).toHaveClass(/correct/);

  console.log('✅ IPv6练习题功能正常');
});
