import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import StartPage from '../pages/StartPage'
require('dotenv').config()

const homePageUrl = 'https://todoist.com'

/**
  * Fixture that focuses on tests that check the login sequence
  */
fixture('Login Tests')
  .page(homePageUrl)

/**
  * Successful Login Test
  * Test that clicks on the login button of the home page,
  * Enters the given email on the email text box (Correct email)
  * Enters the given password on the password text box (Correct password)
  * Clicks on the Login Button of the login page
  * Asserts whenever the Start page loads
  */
test('Successful login', async t => {
  HomePage.clickOnLoginButton()
  LoginPage.setEmail(process.env.EMAIL_ADDRESS)
  LoginPage.setPassword(process.env.PASSWORD)
  LoginPage.clickOnLoginButton()

  await t
    .expect(StartPage.title.innerText).eql('Todoist')
})

/**
  * Unsuccessful Login Test with incorrect email
  * Test that clicks on the login button of the home page,
  * Enters the given email on the email text box (Incorrect email)
  * Enters the given password on the password text box (Correct password)
  * Clicks on the Login Button of the login page
  * Asserts whenever the Error text shows: 'Wrong email or password.'
  */
test('Unsuccessful login - incorrect email', async t => {
  HomePage.clickOnLoginButton()
  LoginPage.setEmail(process.env.INCORRECT_EMAIL)
  LoginPage.setPassword(process.env.PASSWORD)
  LoginPage.clickOnLoginButton()

  await t
    .expect(LoginPage.errorBlock.innerText).contains('Wrong email or password.')
})

/**
  * Unsuccessful Login Test with incorrect password
  * Test that clicks on the login button of the home page,
  * Enters the given email on the email text box (Correct email)
  * Enters the given password on the password text box (Incorrect password)
  * Clicks on the Login Button of the login page
  * Asserts whenever the Error text shows: 'Wrong email or password.'
  */
test('Unsuccessful login - incorrect password', async t => {
  HomePage.clickOnLoginButton()
  LoginPage.setEmail(process.env.EMAIL_ADDRESS)
  LoginPage.setPassword(process.env.INCORRECT_PASSWORD)
  LoginPage.clickOnLoginButton()

  await t
    .expect(LoginPage.errorBlock.innerText).contains('Wrong email or password.')
})
