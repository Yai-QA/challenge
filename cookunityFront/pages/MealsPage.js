const { expect } = require('@playwright/test');

class MealsPage {
  constructor(page) {
    this.page = page;
  }

  async textIsDisplayed(expectedText) {
    await expect(this.page.locator('body')).toContainText(expectedText);
  }
  async hasAtLeastOneMealCard() {
    const elements = this.page.locator('div[data-testid="meal-card-"]');
    const count = await elements.count();
    return count > 0;
  }    
}

module.exports = { MealsPage };
