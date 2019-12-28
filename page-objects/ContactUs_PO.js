import Base_Po from "./Base_PO";

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

}

export default new ContactUS_PO();