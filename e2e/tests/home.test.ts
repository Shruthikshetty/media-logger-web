/**
 * This file contains all the test related to home page
 */

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test('should go to home page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.gotoHomePage();
  // check for text HOME PAGE
  await expect(page.getByText('HOME PAGE')).toBeVisible();
});
