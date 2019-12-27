describe("Add Command", () => {
    beforeEach(function() {
      browser.setWindowSize(1600, 1000);
      browser.url("./");
    });
  
    it("Test webdriveruni login portal", () => {
      const clickById = $("#login-portal");
      clickById.click();

      browser.switchWindow('WebDriver | Login Portal');

      //const loginPageTitle = browser.getTitle();
      //const loginUrl = browser.getUrl();

      const loginPageData =browser.getUrlAndTitle();

      expect(loginPageData.title).to.contains('Login Portal');
      expect(loginPageData.url).to.contains('Login-Portal');


    });
});