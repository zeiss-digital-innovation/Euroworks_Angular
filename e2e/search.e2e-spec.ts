import { SearchPage } from "./search.po";

describe('App routing tests', function() {
  let searchPage: SearchPage;

  beforeEach(() => {
    searchPage = new SearchPage();
    searchPage.navigateTo();
  });

  it('should display no results by default', () => {
    expect(browser.getCurrentUrl()).toContain('/search');
    expect(searchPage.getSearchResultCount()).toEqual(0);
  });
});
