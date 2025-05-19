class PlanSelectionPage {
    constructor(page) {
      this.page = page;
  
      this.sixMealsPlanToggle = this.page.getByTestId('plan-select-6-toggle');
      this.continueButton = this.page.getByTestId('plan-select-continue-button');
    }
    async selectSixMealsPlan() {
      await this.sixMealsPlanToggle.click();
    }
  
    async clickContinue() {
      await this.continueButton.click();
    }
  }
  
  module.exports = { PlanSelectionPage };
  