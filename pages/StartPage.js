import { Selector, t } from 'testcafe'

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

  async clickAddQuickTaskButton () {
    await t
      .click(this.addQuickTaskButton)
  }

  async addTask (task) {
    await t
      .typeText(this.taskInput, task)
  }

  async clickAddTaskButton (){
    await t
      .click(this.submitTaskButton)
  }

  async clickOnSettingsPopUp (){
    if (await this.settingsPopUp.visible) {
        await t.click(this.settingsPopUp);
    }
  }
}

export default new StartPage()
