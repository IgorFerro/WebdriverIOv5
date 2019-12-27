describe("Selectors Test", () => {
  beforeEach(function() {
    browser.setWindowSize(1600, 1000);
    browser.url("./");
  });

  it("By ID", () => {
    const clickById = $("#contact-us");
    clickById.click();
    browser.pause(2000);
  });

  it("By Class", () => {
    const clickById = $(".section-title");
    clickById.click();
    browser.pause(2000);
  });

  it("By XPATH", () => {
    const clickById = $("//h1[text()='CONTACT US']/../..");
    clickById.click();
    browser.pause(2000);
  });

  it("By CSS", () => {
    const clickById = $("#contact-us h1");
    clickById.click();
    browser.pause(2000);
  });
});
