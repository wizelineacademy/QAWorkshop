var page = require('../page_objects/page')
var homePage = require('../page_objects/homePage')
var authPage = require('../page_objects/authenticationPage')
var accountPage = require('../page_objects/createAccountPage')
var data = require('../test_data/data')

beforeAll(function () {
  page.openUrl()
})

describe('User should be able to create a New Account when using valid data.', function () {
  it('User should be able to navigate to Create Account page when using valid email', function () {
    homePage.clickOnSignInButton()
    authPage.enterEmailForRegistration(data.email)
        // Assert Create Account Fields..
    expect(accountPage.verifyRegistrationItemsAreDisplayed()).toBeTruthy()
  })

  it('Firstname & Lastname from "Personal Information" should be auto populated on "Address" section', function () {
        // Fill personal information with test data.
    accountPage.fillPersonalInformation(data.personalInfo)

        // Validate the Email field equals to email used for registration.
    expect(accountPage.getValue(accountPage.emailField)).toEqual(data.email)

        // Validate FirstName and LastName used on Personal Information is auto populated on "Address" section
    expect(accountPage.getValue(accountPage.addressFirstNameField)).toEqual(data.personalInfo.firstName)
    expect(accountPage.getValue(accountPage.addressLastNameField)).toEqual(data.personalInfo.lastName)
  })
})
