# OnboardingChallenge

This repository contains a Proof of Concept (POC) of a test automation framework for Todoist using TestCafe.
The tests can either be run with Chrome or with Safari

## Prerequisites
1. Google chrome and Safari web browsers must be installed 
2. Run the command `npm install`
3. Run the command `npm install testcafe testcafe-reporter-xunit`
4. Run the command `npm i testcafe-browser-provider-browserstack`

## Steps
1. Clone the repository with the following command:
`git clone https://github.com/andreagnavarro/OnboardingChallenge.git`
2. To run with chrome use the following command:
`npm run Chrome_tests`
3. To run with Safari use the following command:
`npm run Safari_tests`
4. To run with Browserstack use the following command:
`npm run Browserstack_tests`
* This will run the tests with chrome@87.0:OS X Catalina, and safari@13.1:OS X Catalina

## Results
1. There will be an html file generated with the results of the tests inside the Reports folder

## Tests to run
1. Successful login: Inputs valid email and password 
   - Expected​: Validates the user navigates to the start page.
2. Unsuccessful login - incorrect email: Inputs invalid email and valid password 
   - Expected​: Validates error message is displayed.
3. Unsuccessful login - incorrect password: Inputs valid email and invalid password
   - Expected: ​Validates error message is displayed.
4. Create a new task: Creates a new task on the start page
   - Expected: ​Validates the task is created correctly.
5. Create 10 new tasks: Created 10 new tasks on the start page
   - Expected: Validates the tasks are created correctly.