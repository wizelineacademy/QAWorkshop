var actions = require('../base/actions')

/**
 * @description Page Objects for Authentication Page.
 */
var AuthenticationPage = function () {
    // Web elements for Login
  this.emailLoginTextField = element(by.id('email'))
  this.passwordTextField = element(by.id('passwd'))
  this.signInButton = element(by.id('SubmitLogin'))

    // Web elements for Create Account
  this.createAccountEmailTextField = element(by.id('email_create'))
  this.createAccountButton = element(by.id('SubmitCreate'))

    /**
     * @description Function used to enter credentials for Login then click on SignIn Button
     * @param {String} username
     * @param {String} password
     */
  this.enterUserCredentials = function (username, password) {
    actions.enterText(this.emailLoginTextField, username)
    actions.enterText(this.passwordTextField, password)
    actions.clickToElement(this.signInButton)
  }

    /**
     * @description Function used to enter a email into email field then click on create account button
     * @param {String} email
     */
  this.enterEmailForRegistration = function (email) {
    actions.enterText(this.createAccountEmailTextField, email)
    actions.clickToElement(this.createAccountButton)
  }
}
module.exports = new AuthenticationPage()
