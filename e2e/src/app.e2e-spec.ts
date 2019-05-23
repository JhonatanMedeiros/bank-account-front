import { AppPage } from './app.po';

describe('Dashboard Module', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display dashboard core message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('dashboard-core works!');
  });

});
