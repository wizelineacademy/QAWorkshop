var uuid = require("uuid/v1")
var email = 'test@' + uuid() + 'gmail.com';

describe("SignIn into the Site", function() {
    it("Navigate to user registration", function() {
        browser.get('http://automationpractice.com/index.php');
        element(by.xpath('//*[@id="header"]/div[2]/div/div/nav/div[1]/a'))
        element(by.css('.login')).click()
        browser.sleep(6000);
        element(by.xpath('//*[@id="email_create"]')).sendKeys(email);
        element(by.css('#SubmitCreate')).click();
        browser.sleep(6000);
        expect(element(by.xpath('//*[@id="customer_firstname"]')).isPresent()).toBe(true);
    });

    it("User Registration", function() {
        browser.sleep(3000);
        element(by.xpath('//*[@id="id_gender1"]')).click()
        browser.sleep(3000);
        element(by.xpath('//*[@id="customer_firstname"]')).sendKeys('firstName');
        browser.sleep(3000);
        element(by.xpath('//*[@id="customer_lastname"]')).sendKeys('lastName');
        expect(element(by.id('email')).getText()).toBe(email)
    });
});