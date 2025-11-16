// Before you run the script read the README.md file for commands

import { test, expect } from '@playwright/test';

test('User logs in, adds product to cart, verifies cart item, and logs out', async ({ page }) => {

 
  await page.goto('https://www.saucedemo.com/');


  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');


  await expect(page).toHaveURL(/inventory.html/);

 
  const productName = await page.locator('.inventory_item_name').first().textContent();
  await page.locator('button.btn_inventory').nth(0).click();


  await page.click('.shopping_cart_link');

 
  const cartProductName = await page.locator('.inventory_item_name').textContent();
  expect(cartProductName.trim()).toBe(productName.trim());


  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

 
  await expect(page).toHaveURL('https://www.saucedemo.com/');

});


