import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import StartPage from '../pages/StartPage'
require('dotenv').config()

const homePageUrl = 'https://todoist.com/'
const taskArray = process.env.TASK_NAMES_LIST.split(',')

/**
  * Fixture that focuses on tests that check the Add task sequence
  * Before every tests, the login sequence is performed, including changing the time zone if needed
  */
fixture('Tasks Tests')
  .page(homePageUrl)
  .beforeEach(async t => {
    await HomePage.clickOnLoginButton()
    await LoginPage.setEmail(process.env.EMAIL_ADDRESS)
    await LoginPage.setPassword(process.env.PASSWORD)
    await LoginPage.clickOnLoginButton()
    await StartPage.clickOnSettingsPopUp()
  })

/**
 * Create a new task
 * Clicks on the Quick Task Button on the header of the Start Page
 * Adds the task text given into the textbox
 * Clicks on the submit task button
 * Asserts when the task is found in the Start page
 */
test('Create a new task', async t => {
  StartPage.clickAddQuickTaskButton()
  StartPage.addTask(process.env.TASK_NAME)
  StartPage.clickAddTaskButton()

  await t
    .expect(StartPage.task.withExactText(process.env.TASK_NAME).exists).ok()
})

/**
 * Create 10 new tasks
 * Clicks on the Quick Task Button on the header of the Start Page
 * Adds the task text given into the textbox
 * Clicks on the submit task button
 * Asserts when the task is found in the Start page
 * Repeats above steps 10 times
 */
test('Create 10 new tasks', async t => {
  for (let i = 0; i < taskArray.length; i++) {
    StartPage.clickAddQuickTaskButton()
    StartPage.addTask(taskArray[i])
    StartPage.clickAddTaskButton()

    await t
      .expect(StartPage.task.withExactText(taskArray[i]).exists).ok()
  }
})
