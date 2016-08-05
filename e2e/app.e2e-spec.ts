import { AppPage } from './app.po';
import { AboutPage } from "./about.po";
import {ContactPage} from "./contact.po";
import {SearchPage} from "./search.po";

describe('App routing tests', function() {
  let appPage: AppPage;
  let aboutPage: AboutPage;
  let contactPage: ContactPage;
  let searchPage: SearchPage;

  beforeEach(() => {
    appPage = new AppPage();
    aboutPage = new AboutPage();
    contactPage = new ContactPage();
    searchPage = new SearchPage();

    appPage.navigateTo();
  });

  it('should display search by default', () => {
    expect(browser.getCurrentUrl()).toContain('/search');
    expect(searchPage.isDisplayed()).toBe(true);
  });

  it('should be able to navigate to about page', () => {
    appPage.clickAboutLink().then(() => {
      expect(browser.getCurrentUrl()).toContain('/about');
      expect(aboutPage.isDisplayed()).toBe(true);
    });
  });

  it('should be able to navigate to contact page', () => {
    appPage.clickContactLink().then(() => {
      expect(browser.getCurrentUrl()).toContain('/contact');
      expect(contactPage.isDisplayed()).toBe(true);
    });
  });

  it('should be able to navigate to search page', () => {
    appPage.clickSearchLink().then(() => {
      expect(browser.getCurrentUrl()).toContain('/search');
      expect(searchPage.isDisplayed()).toBe(true);
    });
  });

  it('should be able to navigate to root page and display search page', () => {
    appPage.clickRootLink().then(() => {
      expect(browser.getCurrentUrl()).toContain('/search');
      expect(searchPage.isDisplayed()).toBe(true);
    });
  });
});
