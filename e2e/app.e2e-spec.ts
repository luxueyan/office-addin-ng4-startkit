import { OfficeAddinNg4StartkitPage } from './app.po';

describe('office-addin-ng4-startkit App', () => {
  let page: OfficeAddinNg4StartkitPage;

  beforeEach(() => {
    page = new OfficeAddinNg4StartkitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
