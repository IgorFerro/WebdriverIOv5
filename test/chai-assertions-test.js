describe("Chai Assertions", () => {
    beforeEach(function() {
      browser.setWindowSize(1600, 1000);
      browser.url("./");
    });
  
    it("Test webdriveruni login portal", () => {
      const clickById = $("#login-portal");
      clickById.click();

      browser.switchWindow('WebDriver | Login Portal');

      const loginPageTitle = browser.getTitle();
      const loginUrl = browser.getUrl();

      expect(loginPageTitle).to.contains('Login Portal');
      expect(loginUrl).to.contains('Login-Portal');


    });
});