import { test, expect } from '@playwright/test';
const { MainPage } = require('../pages/MainPage');
const { PreferencePage } = require('../pages/PreferencePage');
const { PlanSelectionPage } = require('../pages/PlanSelectionPage');
const { LoginPage } = require('../pages/LoginPage');
const { MealsPage } = require('../pages/MealsPage');


test('UI-tests', async ({ page }) => {
    const mainPage = new MainPage(page);
    const preferencePage = new PreferencePage(page);
    const planSelectionPage = new PlanSelectionPage(page);
    const loginPage = new LoginPage(page);
    const mealsPage = new MealsPage(page);
    await mainPage.goTo();
    await mainPage.fillZipCode('10001');  
    await mainPage.clickOrderNow();
    await page.waitForTimeout(3000);
    await preferencePage.clickSkipAll();
    await page.waitForTimeout(3000);
    await planSelectionPage.selectSixMealsPlan();
    await planSelectionPage.clickContinue();
    await page.waitForTimeout(3000);
    await loginPage.loginWithQaEmail('123123123');
    await page.waitForURL('**/meal-select**', { timeout: 15000 }); 
    await mealsPage.hasAtLeastOneMealCard();
    await mealsPage.textIsDisplayed('Meal selected 0/6');
});
