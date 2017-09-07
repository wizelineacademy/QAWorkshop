var actions = require('../base/actions')

/**
 * @description Page objectes elements for create account web page
 */
var CreateAccountPage = function () {
  this.mrTitleOption = element(by.id('uniform-id_gender1'))
  this.mrsTitleOption = element(by.id('uniform-id_gender2'))
  this.firstNameField = element(by.id('customer_firstname'))
  this.lastNameField = element(by.id('customer_lastname'))
  this.emailField = element(by.id('email'))
  this.passwordField = element(by.id('passwd'))
  this.daysDropdownArrow = element(by.css('#uniform-days'))
  this.daysDropdown = element(by.id('days'))
  this.monthsDropdownArrow = element(by.css('#uniform-months'))
  this.monthsDropdown = element(by.id('months'))
  this.yearDropdownArrow = element(by.css('#uniform-years'))
  this.yearDropdown = element(by.id('years'))
  this.newsLetterCheckbox = element(by.css('#uniform-newsletter #newsletter'))
  this.receiveOffersCheckbox = element(by.css('#uniform-optin #optin'))
  this.addressFirstNameField = element(by.id('firstname'))
  this.addressLastNameField = element(by.id('lastname'))

    /**
     * @description Select a random day from Days Dropdown.
     * @param {String} day
     * @param {String} month
     * @param {String} year
     */
  this.selectDayOfBirthFromDropdowns = function (day, month, year) {
        // Select a day from dropdown
    actions.clickToElement(this.daysDropdownArrow)
    actions.clickToElement(this.daysDropdown.element(by.css('option[value="' + day + '"]')))

        // Select a month from dropdown
    actions.clickToElement(this.monthsDropdownArrow)
    actions.clickToElement(this.monthsDropdown.element(by.css('option[value="' + month + '"]')))

        // Select a year from dropdown
    actions.clickToElement(this.yearDropdownArrow)
    actions.clickToElement(this.yearDropdown.element(by.css('option[value="' + year + '"]')))
  }

    /**
     * @description Verify user is landed to Create Account Page.
     * @return {Boolean}
     */
  this.verifyRegistrationItemsAreDisplayed = function () {
    return (actions.isElementDisplayed(this.firstNameField) &&
            actions.isElementDisplayed(this.lastNameField) &&
            actions.isElementDisplayed(this.emailField))
  }

    /**
     * @description Fill the personal information field for Create Account.
     * @param {Object} personalInfo
     */
  this.fillPersonalInformation = function (personalInfo) {
        // Select title from radio buttons
    if (personalInfo.title === 1) {
      actions.clickToElement(this.mrTitleOption)
    } else {
      actions.clickToElement(this.mrsTitleOption)
    }

        // Type FistName, LastName and Password
    actions.enterText(this.firstNameField, personalInfo.firstName)
    actions.enterText(this.lastNameField, personalInfo.lastName)
    actions.enterText(this.passwordField, personalInfo.password)

        // Select day of birth from the dropdown.
    this.selectDayOfBirthFromDropdowns(personalInfo.day, personalInfo.month, personalInfo.year)
    if (personalInfo.newsLetter) { this.newsLetterCheckbox.click() }
    if (personalInfo.specialOffers) { this.receiveOffersCheckbox.click() }
  }

    /**
     * @description Get value from web element
     * @param {WebElement} element
     * @return {String} Value of element.
     */
  this.getValue = function (element) {
    return actions.getAttributeValue(element)
  }
}
module.exports = new CreateAccountPage()
