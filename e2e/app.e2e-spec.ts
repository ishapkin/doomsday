import { DoomsdayPage } from './app.po';

describe('doomsday App', () => {
  let page: DoomsdayPage;

  beforeEach(() => {
    page = new DoomsdayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
