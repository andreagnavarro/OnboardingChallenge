import { Selector, t } from 'testcafe'

/**
 * Page class for the following url: todoist.com
 */
class HomePage {
  constructor () {
    this.loginButtonHome = Selector('a._2q_cf[href="/users/showlogin"]')
  }

  /**
    * Clicks on the login Button on the Home Page
    */
  async clickOnLoginButton () {
    await t
      .click(this.loginButtonHome)
  }
}

export default new HomePage()
