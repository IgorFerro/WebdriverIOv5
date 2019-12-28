var config = require('../config/main-config');
var dataGenerators = require('../utils/dataGenerator');
import ContactUs_PO from '../page-objects/ContactUs_PO';


describe("Test contact us page on webdriver uni", () => {
    beforeEach(function() {
  
      ContactUs_PO.open();
      
    });

    it("Submit all information via the contact us page", () => {
         
        ContactUs_PO.successfulContactUsSubmission();
        browser.pause(5000);
      });
    });