var config = require('../config/main-config')


describe("Test contact us page on webdriver uni", () => {
    beforeEach(function() {
      //browser.setWindowSize(1800,1200)
      browser.fullscreenWindow();
      browser.url("./");
      
      const pageDetails = browser.getUrlAndTitle();
      expect(pageDetails.url).to.contain('webdriveruniversity');
      expect(pageDetails.title).to.contain('WebDriverUniversity');

      
    });

    it("Submit all information via the contact us page", () => {
         const contactUsButton = $('//h1[text()="CONTACT US"]/..');   
         contactUsButton.click();
         
         browser.switchWindow('WebDriver | Contact Us');

         const firstName = $('//*[@name="first_name"]');
         const lastName = $('//*[@name="last_name"]');
         const emailAddress = $('//*[@name="email"]');
         const message = $('//*[@name="message"]');
         const subimitButton = $('//*[@value="SUBMIT"]');

         firstName.setValue(config.firstName);
         lastName.setValue(config.lastName);
         emailAddress.setValue('test@test.com');
         message.setValue('hello');
         subimitButton.click();

         const contactUsSubmissionDetails = browser.getUrlAndTitle();
         expect(contactUsSubmissionDetails.url).to.contain('contact-form-thank-you');
         

        browser.pause(5000);
      });
    });