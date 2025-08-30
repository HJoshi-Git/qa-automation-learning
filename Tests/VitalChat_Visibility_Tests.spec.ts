import { test, expect } from '@playwright/test';

test('navigates through the Vitalchat website menu and verifies the Our Story section content', async ({ page }) => {
  await page.goto('https://vitalchat.com/');
  console.log('Navigated to https://vitalchat.com/');

  await page.locator('#menu-primary-menu').getByRole('link', { name: 'Platform' }).click();
  console.log('Clicked on Platform link');

  await page.locator('#menu-primary-menu').getByRole('link', { name: 'Virtual Nursing' }).click();
  console.log('Clicked on Virtual Nursing link');

  await page.locator('#menu-primary-menu').getByRole('link', { name: 'News & Events' }).click();
  console.log('Clicked on News & Events link');

  await page.locator('#menu-primary-menu').getByText('About Us').click();
  console.log('Clicked on About Us link (first time)');

  await page.locator('#menu-primary-menu').getByText('About Us').click();
  console.log('Clicked on About Us link (second time)');

  await page.getByRole('link', { name: 'Our Story' }).click();
  console.log('Clicked on Our Story link');

  await page.locator('#menu-primary-menu').getByText('About Us').click();
  console.log('Clicked on About Us link (third time)');

  await expect(page.locator('#menu-primary-menu').getByText('About Us')).toBeVisible();
  console.log('Verified About Us link is visible');

  await page.getByRole('heading', { name: 'About Us' }).click();
  console.log('Clicked on About Us heading');

  await expect(page.getByRole('heading', { name: 'Our Story' })).toBeVisible();
  console.log('Verified Our Story heading is visible');

  const ourStoryText = await page.locator('#post-25').textContent();
  console.log('Fetched Our Story section text content');

  await expect(page.locator('#post-25')).toContainText('Vitalchat was born from a deeply personal place. Like many, we’ve stood at the bedsides of loved ones in the hospital — juggling worry, long drives, and the aching feeling of not always being there. As caregivers ourselves, we saw the very real barriers that exist between patients, families, and care teams. And we knew there had to be a better way to stay connected.');
  console.log('Verified Our Story text content is present');
});