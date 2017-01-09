import { Digiangular2Page } from './app.po';

describe('digiangular2 App', function() {
  let page: Digiangular2Page;

  beforeEach(() => {
    page = new Digiangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
