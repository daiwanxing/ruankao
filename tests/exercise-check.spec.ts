import { test, expect } from '@playwright/test';

test.describe('ExerciseBox Functionality', () => {
  test('should show correct feedback when correct option is clicked', async ({ page }) => {
    // Navigate to a page with exercises
    await page.goto('http://localhost:4321/chapter-01/01-info-informatization/');

    // Find the first exercise box
    const exerciseBox = page.locator('.exercise-box[data-question-id="ch01-01"]');
    await exerciseBox.scrollIntoViewIfNeeded();

    // Click the correct option (C)
    // The options are listed as li.option-item with data-option="C"
    const correctOption = exerciseBox.locator('.option-item[data-option="C"]');
    await correctOption.click();

    // Check if the result header shows "回答正确"
    const resultHeader = exerciseBox.locator('.result-header');
    await expect(resultHeader).toBeVisible();
    await expect(resultHeader).toContainText('回答正确');
    
    // Check if the option has the correct class
    await expect(correctOption).toHaveClass(/correct/);
  });

  test('should show incorrect feedback when wrong option is clicked', async ({ page }) => {
    await page.goto('http://localhost:4321/chapter-01/01-info-informatization/');

    // Use the second exercise box
    const exerciseBox = page.locator('.exercise-box[data-question-id="ch01-02"]');
    await exerciseBox.scrollIntoViewIfNeeded();

    // Correct answer is C, click A instead
    const wrongOption = exerciseBox.locator('.option-item[data-option="A"]');
    await wrongOption.click();

    // Check if the result header shows "回答错误"
    const resultHeader = exerciseBox.locator('.result-header');
    await expect(resultHeader).toBeVisible();
    await expect(resultHeader).toContainText('回答错误');
    
    // Check if the wrong option has the incorrect class
    await expect(wrongOption).toHaveClass(/incorrect/);
    
    // Check if the correct option (C) is highlighted
    const correctOption = exerciseBox.locator('.option-item[data-option="C"]');
    await expect(correctOption).toHaveClass(/correct/);
  });

  test('should persist state in sessionStorage', async ({ page }) => {
    await page.goto('http://localhost:4321/chapter-01/01-info-informatization/');

    const exerciseBox = page.locator('.exercise-box[data-question-id="ch01-01"]');
    const correctOption = exerciseBox.locator('.option-item[data-option="C"]');
    
    // Click correct option
    await correctOption.click();
    
    // Reload page
    await page.reload();
    
    // Check if it's still locked and shows correct
    const resultHeader = exerciseBox.locator('.result-header');
    await expect(resultHeader).toBeVisible();
    await expect(resultHeader).toContainText('回答正确');
    await expect(correctOption).toHaveClass(/correct/);
  });
});
