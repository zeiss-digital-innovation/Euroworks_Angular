import { EuroworksAngular2Page } from './app.po';

describe('euroworks-angular2 App', function() {
  let page: EuroworksAngular2Page;

  beforeEach(() => {
    page = new EuroworksAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
