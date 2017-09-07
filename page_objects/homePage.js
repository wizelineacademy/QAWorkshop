var actions = require('../base/actions')

/**
 * @description Page objects elements for home web page.
 */
var HomePage = function () {
  this.signInButton = element(by.css('.login'))
  this.contactUsButton = element(by.id('contact-link'))

    /**
     * @description Click on Sign In buttom from HomePage
     */
  this.clickOnSignInButton = function () {
    actions.clickToElement(this.signInButton)
  }
}
module.exports = new HomePage()
