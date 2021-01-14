import { Selector, t } from 'testcafe'

/**
 * Page class for the following url: https://todoist.com/users/showlogin
 */
class LoginPage {
  constructor () {
    this.loginButton = Selector('button')
    this.emailInput = Selector('input#email')
    this.passwordInput = Selector('input#password')
    this.errorBlock = Selector('div.error_msg')
  }

  /**
  * Inputs the given email on the email text box
  * @param {string} email email to be entered in the email text box
  */
  async setEmail (email) {
    await t
      .typeText(this.emailInput, email)
  }

  /**
  * Inputs the given password on the password text box
  * @param {string} password password to be entered in the password text box
  */
  async setPassword (password) {
    await t
      .typeText(this.passwordInput, password)
  }

  /**
  * Clicks on the login button on the Login page
  */
  async clickOnLoginButton () {
    await t
      .click(this.loginButton)
  }
}

export default new LoginPage()
