import { PgdPage } from './app.po';

describe('pgd App', function() {
  let page: PgdPage;

  beforeEach(() => {
    page = new PgdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
