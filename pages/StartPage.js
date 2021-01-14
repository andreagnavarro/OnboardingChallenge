import { Selector, t } from 'testcafe'

/**
 * Page class for the following url: https://todoist.com/app/#/today
 */
class StartPage {
  constructor () {
    this.logoutButton = Selector('span.user+menu_label')
    this.menuButton = Selector('button.reactist_menubutton top_bar_btn settings_btn')
    this.topBarButton = Selector('button.top_bar_btn')
    this.addQuickTaskButton = Selector('button#quick_add_task_holder')
    this.taskInput = Selector('.public-DraftStyleDefault-block')
    this.submitTaskButton = Selector('button.ist_button')
    this.task = Selector('div.markdown_content')
    this.title = Selector('title')
    this.settingsPopUp = Selector('a.timezone_button')
  }

  /**
  * Clicks on the Add Quick task button located on the header
  */
  async clickAddQuickTaskButton () {
    await t
      .click(this.addQuickTaskButton)
  }

  /**
  * Inputs the given task text on the text box
  * @param {string} task task text to be entered
  */
  async addTask (task) {
    await t
      .typeText(this.taskInput, task)
  }

  /**
  * Clicks on the Submit Task button located on the add new task window
  */
  async clickAddTaskButton () {
    await t
      .click(this.submitTaskButton)
  }

  /**
  * Clicks on the change settings button that pops up whenever there is a change on the timezone
  */
  async clickOnSettingsPopUp () {
    if (await this.settingsPopUp.visible) {
      await t.click(this.settingsPopUp)
    }
  }
}

export default new StartPage()
