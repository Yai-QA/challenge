class MainPage {
    constructor(page) {
      this.page = page;
      this.heroColumn = this.page.getByTestId('hero-vertical-slider-text-column');
      this.zipCodeInput = this.heroColumn.getByTestId('funnel-start-form-zipcode-input');
      this.orderNowButton = this.heroColumn.getByRole('button', { name: 'Order Now' });
    }
  
    async goTo() {
      await this.page.goto('/'); // Replace with your actual URL
    }
  
    async fillZipCode(zipCode) {
      await this.zipCodeInput.click();
      await this.zipCodeInput.fill(zipCode);
    }
  
    async clickOrderNow() {
      await this.orderNowButton.click();
    }
  }
  
  module.exports = { MainPage };
  