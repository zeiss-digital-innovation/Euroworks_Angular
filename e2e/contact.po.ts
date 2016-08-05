export class ContactPage {
  navigateTo() {
    return browser.get('/contact');
  }

  isDisplayed() {
    return element(by.css('ew-contact')).isDisplayed();
  }
}
