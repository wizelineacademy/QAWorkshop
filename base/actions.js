'use strict'
// If you want to know more about the ExpectedConditions
// please visit the URL https://github.com/angular/protractor/blob/master/lib/expectedConditions.ts
// so you can see all the Functions fo ExpectedConditions.
var EC = protractor.ExpectedConditions

var Actions = function () {
    /**
     * @description Wait for element to be clickable and hover to element
     * @method hoverElement
     * @param {webElement} element
     */
  this.hoverElement = function (element) {
    var isClickable = EC.elementToBeClickable(element)
    browser.wait(isClickable, 30000)
    browser.actions().mouseMove(element).perform()
  }

    /**
     * @description Wait for element to be clickable then perform click
     * @method clickToElement
     * @param {webElement}  element
     */
  this.clickToElement = function (element) {
    var isClickable = EC.elementToBeClickable(element)
    browser.wait(isClickable, 30000, 'Element is not clickable')
    element.click()
  }

    /**
     * @description Wait for element to be visible then getText
     * @method getElementText
     * @param {webElement} element
     * @return {String}
     */
  this.getElementText = function (element) {
    var isVisible = EC.visibilityOf(element)
    browser.wait(isVisible, 30000)
    return element.getText()
  }

    /**
     * @description Wait for element to be visible then sendKeys.
     * @method enterText
     * @param {webElement} element
     * @param {String} text
     */
  this.enterText = function (element, text) {
    var isVisible = EC.visibilityOf(element)
    browser.wait(isVisible, 30000)
    element.sendKeys(text)
  }

    /**
     * @description Wait for element to be visible then clear box.
     * @method clearElementText
     * @param {webElement} element
     */
  this.clearElementText = function (element) {
    var isPresent = EC.visibilityOf(element)
    browser.wait(isPresent, 30000)
    element.clear()
  }

    /**
     * @description Wait for element to be visible then verify if element is displayed.
     * @method isElementDisplayed
     * @param {webElement} element
     * @return {bool}
     */
  this.isElementDisplayed = function (element) {
    var isPresent = EC.visibilityOf(element)
    browser.wait(isPresent, 30000)
    return element.isDisplayed()
  }

    /**
     * @description Wait for element to be visible then verify if element is not present.
     * @method elementNotBePresent
     * @param {webElement} element
     * @return {bool}
     */
  this.elementNotBePresent = function (element) {
    var isNotVisible = EC.visibilityOf(element)
    browser.wait(isNotVisible, 2000)
    return element.isDisplayed.bind(isNotVisible)
  }

    /**
     * @description Get element attribute 'value'
     * @param {WebElement} element
     * @return Attribute value from element
     */
  this.getAttributeValue = function (element) {
    var isPresent = EC.visibilityOf(element)
    browser.wait(isPresent, 30000)
    return element.getAttribute('value')
  }

    /**
     * @description Wait for element to be invisible.
     * @method elementIsDisplayed.
     * @param {webElement} element
     * @return {bool}
     */
  this.elementIsDisplayed = function (element) {
    browser.wait(EC.invisibilityOf(element), 2000).then(function () {
      if (EC.invisibilityOf(element)) {
        console.log('Item is not present')
        return false
      } else {
        console.log('element is present')
        return true
      }
    })
  }
}
module.exports = new Actions()
