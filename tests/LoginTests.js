import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import StartPage from '../pages/StartPage'
require('dotenv').config()

const homePageUrl = 'https://todoist.com'

fixture('Login Tests')
  .page(homePageUrl)

test('Successful login', async t => {
  HomePage.clickOnLoginButton()
  LoginPage.setEmail(process.env.EMAIL_ADDRESS)
  LoginPage.setPassword(process.env.PASSWORD)
  LoginPage.clickOnLoginButton()

  await t
  .expect(StartPage.title.innerText).eql('Todoist')
})

test('Unsuccessful login - incorrect email', async t => {
  HomePage.clickOnLoginButton()
  LoginPage.setEmail(process.env.INCORRECT_EMAIL)
  LoginPage.setPassword(process.env.PASSWORD)
  LoginPage.clickOnLoginButton()

  await t
    .expect(LoginPage.errorBlock.innerText).contains('Wrong email or password.')
})

test('Unsuccessful login - incorrect password', async t => {
  HomePage.clickOnLoginButton()
  LoginPage.setEmail(process.env.EMAIL_ADDRESS)
  LoginPage.setPassword(process.env.INCORRECT_PASSWORD)
  LoginPage.clickOnLoginButton()

  await t
    .expect(LoginPage.errorBlock.innerText).contains('Wrong email or password.')
})
