import Base_Po from "./Base_PO";
var config = require('../config/main-config');
var dataGenerators = require('../utils/dataGenerator')

class ContactUS_PO extends Base_Po{
   open(){
       super.open('http://webdriveruniversity.com/Contact-Us/contactus.html');
   } 

   get firstName(){
       return $('//*[@name="first_name"]');
   }

   get lastName(){
      return $('//*[@name="last_name"]')
   }

   get email(){
       return $('//*[@name="email"]')
   }
   
   get message(){
       return $('//*[@name="message"]')
   }

   get submitButton(){
       return $('//*[@value="SUBMIT"]')
   }

   submit(){
       this.submitButton.click();
   }

   get successfulContactHeader(){
       return $("//div[@id='contact_reply']/h1")
   }

   successfulContactUsSubmission(){
         this.firstName.waitForDisplayed(5000);
         this.firstName.setValue(config.firstName);
         this.lastName.setValue(config.lastName);
         this.email.setValue(dataGenerators.generateRandomEmailAddress());
         this.message.setValue(dataGenerators.generateRandomString());
         this.submit();

         expect(this.successfulContactHeader.getText()).to.contain('Thank You for your Message!');

   }

}

export default new ContactUS_PO();