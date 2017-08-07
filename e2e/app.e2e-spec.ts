import { Mach5Page } from './app.po';

describe('mach5 App', () => {
  let page: Mach5Page;

  beforeEach(() => {
    page = new Mach5Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
