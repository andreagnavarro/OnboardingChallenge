import { Selector, t } from 'testcafe'

class LoginPage {
  constructor () {
    this.loginButton = Selector('button')
    this.emailInput = Selector('input#email')
    this.passwordInput = Selector('input#password')
    this.errorBlock = Selector('div.error_msg')
  }

  async setEmail (email) {
    await t
      .typeText(this.emailInput, email)
  }

  async setPassword (password) {
    await t
      .typeText(this.passwordInput, password)
  }

  async clickOnLoginButton () {
    await t
      .click(this.loginButton)
  }
}

export default new LoginPage()
