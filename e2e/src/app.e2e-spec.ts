import { AppPage } from './app.po';
import { browser, logging, protractor } from 'protractor';


const EC = protractor.ExpectedConditions;

describe('OrganicWorld App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have <app-header>', () => {
    // Write logic here
  });

  it('should have <app-footer>', () => {
    // Write logic here
  });

  it('should not load all product page ', () => {
    // Write logic here
  });

  it('should not load product by category ', () => {
    // Write logic here
  });

  it('should not load product search ', () => {
    // Write logic here;
  });

  it('should not load account details ', () => {
    // Write logic here
  });

  it('should load empty cart page with no table', () => {
    // Write logic here
  });

  it('should have <nav> with classes nav navbar-dark', () => {
    // Write logic here
  });

  it('should have nav-brand of logo', () => {
    // Write logic here
  });

  it('should have navbar with collapsable navtabs', () => {
    // Write logic here
  });

  it('should have three navtabs when not loggedIn', () => {
    // Write logic here3);
  });

  it('should have login modal', () => {
    // Write logic here
  });

  it('should have register modal', () => {
    // Write logic here
  });

  it('should have a carousel in base with two images in slide', () => {
    // Write logic here
  });

  it('should have flex grid in base', () => {
    // Write logic here
  });

  it('should have product search button redirect to login modal when not loggedIn', () => {
    // Write logic here
  });
  it('should open register modal fill data and create new user', async () => {
    // Write logic here
  });

  it('should have login modal to login', async () => {
    // Write logic here
  });

  it('should have five tabs after login', () => {
    // Write logic here
  });

  it('should have product search to search products', () => {
    // Write logic here
  });

  it('should have add to cart button to save in sessionStorage', () => {
    // Write logic here
  });

  it('should have cart page with table and checkout button', () => {
    // Write logic here
  });

  it('should have account page with an accordion with two cards "User Details" and "Previous Orders"', () => {
    // Write logic here
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

});
