import { UxPlaygroundPage } from './app.po';

describe('UX Playground App', () => {
  let page: UxPlaygroundPage;

  beforeEach(() => {
    page = new UxPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
