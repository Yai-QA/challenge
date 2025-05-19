class LoginPage {
    constructor(page) {
      this.page = page;
  
      this.loginForm = this.page.getByTestId('login-form');
      this.emailInput = this.page.getByTestId('email');
      this.submitEmailButton = this.page.getByTestId('submit-email');
      this.passwordInput = this.page.getByTestId('password');
      this.submitFormButton = this.page.getByTestId('submit-form');
    }
  
    async openLoginForm() {
      await this.loginForm.click();
    }
  
    generateRandom9Digits() {
      return Math.floor(100000000 + Math.random() * 900000000).toString();
    }
  

    async fillEmailWithRandomNumber() {
      const randomDigits = this.generateRandom9Digits();
      const email = `qa.mail+${randomDigits}@gmail.com`;
      await this.emailInput.click();
      await this.emailInput.fill(email);
      await this.submitEmailButton.click();
      return email;
    }
  
    async fillPassword(password) {
      await this.passwordInput.click();
      await this.passwordInput.fill(password);
    }
  
    async submitForm() {
      await this.submitFormButton.click();
    }

    async loginWithQaEmail(password) {
      await this.openLoginForm();
      const email = await this.fillEmailWithRandomNumber();
      await this.fillPassword(password);
      await this.submitForm();
      return email;
    }
  }
  
  module.exports = { LoginPage };
  