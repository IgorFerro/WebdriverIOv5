var config = require('../config/main-config')
var dataGenerators = require('../utils/dataGenerator')
import ContactUs_PO from '../page-objects/ContactUs_PO';


describe("Test contact us page on webdriver uni", () => {
    beforeEach(function() {
      //browser.setWindowSize(1800,1200)
      browser.fullscreenWindow();
      ContactUs_PO.open();
      //browser.url("./");
      
      //const pageDetails = browser.getUrlAndTitle();
      //expect(pageDetails.url).to.contain('webdriveruniversity');
      //expect(pageDetails.title).to.contain('WebDriverUniversity');

      
    });

    it("Submit all information via the contact us page", () => {
         //const contactUsButton = $('//h1[text()="CONTACT US"]/..');   
         //contactUsButton.click();

        //browser.waitAndClick('//h1[text()="CONTACT US"]/..');
         //browser.switchWindow('WebDriver | Contact Us');


        //const firstName = $('//*[@name="first_name"]');
        //const lastName = $('//*[@name="last_name"]');
        //const emailAddress = $('//*[@name="email"]');
        //const message = $('//*[@name="message"]');
        //const subimitButton = $('//*[@value="SUBMIT"]');

         //firstName.setValue(config.firstName);
         //lastName.setValue(config.lastName);
         //emailAddress.setValue('test@test.com');
         //message.setValue('hello');
        // subimitButton.click();

         //browser.waitAndSendkeys('//*[@name="first_name"]',config.firstName);
         //browser.waitAndSendkeys('//*[@name="last_name"]',config.lastName);
         //browser.waitAndSendkeys('//*[@name="email"]',dataGenerators.generateRandomEmailAddress());
         //browser.waitAndSendkeys('//*[@name="message"]',dataGenerators.generateRandomString());
        // browser.waitAndClick('//*[@value="SUBMIT"]');

         ContactUs_PO.firstName.setValue(config.firstName);
         ContactUs_PO.lastName.setValue(config.lastName);
         ContactUs_PO.email.setValue(dataGenerators.generateRandomEmailAddress());
         ContactUs_PO.message.setValue(dataGenerators.generateRandomString());
         ContactUs_PO.submit();



         //const contactUsSubmissionDetails = browser.getUrlAndTitle();
         expect(ContactUs_PO.successfulContactHeader.getText()).to.contain('Thank You for your Message!');
         

        browser.pause(5000);
      });
    });