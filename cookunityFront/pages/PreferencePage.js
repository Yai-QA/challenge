class PreferencePage {
    constructor(page) {
      this.page = page;
      this.skipAllButton = this.page.getByTestId('preferences-quiz-skip-all-button');
    }
    async clickSkipAll() {
      await this.skipAllButton.waitFor({ state: 'visible', timeout: 10000 }); 
      await this.skipAllButton.click();
    }
  }
  module.exports = { PreferencePage };
  