import { DmPlaygroundPage } from './app.po';

describe('Dm Catalog App', () => {
  let page: DmPlaygroundPage;

  beforeEach(() => {
    page = new DmPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
