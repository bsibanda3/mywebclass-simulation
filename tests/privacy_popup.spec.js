const { test, expect } = require('@playwright/test');

test('Should display the popup correctly', async ({ page }) => {
  // Navigate to the page.
  await page.goto('http://localhost:3000');

  // Click the button to open the popup.
  const button = await page.$('.popup-button');
  await button.click();

  // Wait for the popup to appear.
  const popup = await page.waitForSelector('.popup');

  // Expect the popup to be visible.
  await expect(popup.isVisible()).toBeTruthy();

  // Expect the popup to have the correct content.
  const title = await popup.$('.popup-title');
  await expect(title).toHaveText('Popup Title');
  const message = await popup.$('.popup-message');
  await expect(message).toHaveText('This is the popup message.');
});