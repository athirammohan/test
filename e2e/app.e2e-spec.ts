import { ApplicationManagementPage } from './app.po';

describe('application-management App', function() {
  let page: ApplicationManagementPage;

  beforeEach(() => {
    page = new ApplicationManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
