import { AppPage } from './app.po';
import { browser, logging, protractor, element, by } from 'protractor';


const EC = protractor.ExpectedConditions;

describe('OrganicWorld App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have <app-header>', () => {
    // Write logic here
    page.navigateToBase();
    expect(page.toHeader()).not.toBeUndefined();
  });

  it('should have <app-footer>', () => {
    // Write logic here
    expect(element(by.css('<app-footer>'))).not.toBeUndefined();
  });

  it('should not load all product page ', () => {
    // Write logic here
    page.navigateToBase();
    page.navigateToProductPage();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/');
  });

  it('should not load product by category ', () => {
    // Write logic here
    page.navigateToBase();
    browser.get('/products/fruit');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/');
  });

  it('should not load product search ', () => {
    // Write logic here;
    const searchButton = element(by.partialButtonText('Search'));
    element(by.css('input[placeholder="Search"]')).sendKeys('apple');
    searchButton.click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/');
  });

  it('should not load account details ', () => {
    // Write logic here
    page.navigateToBase();
    page.navigateToaccount();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/');
  });

  it('should load empty cart page with no table', () => {
    // Write logic here
    page.navigateToBase();
    page.navigateToCart();
    expect(element(by.css('<app-cart>'))).not.toBeUndefined();
    //expect(element(by.tagName('table'))).toBeUndefined();

  });

  it('should have <nav> with classes nav navbar-dark', () => {
    // Write logic here
    page.navigateToBase();
    expect(element(by.tagName('nav')).getAttribute('class')).toContain('navbar');
    expect(element(by.tagName('nav')).getAttribute('class')).toContain('navbar-dark');
  });

  it('should have nav-brand of logo', () => {
    // Write logic here
    const img = element(by.className('navbar-brand'));
    expect(img.element(by.tagName('img')).getAttribute('src')).toEqual(
      browser.baseUrl + 'assets/images/logo.webp'
    );
  });

  it('should have navbar with collapsable navtabs', () => {
    // Write logic here
    const div = element(by.css('#navbarSupportedContent'));
    expect(div.getAttribute('class')).toEqual('collapse navbar-collapse');
  });

  it('should have three navtabs when not loggedIn', () => {
    // Write logic here3);
    const list = element.all(by.className('nav-item'));
    expect(list.count()).toEqual(3);
  });

  it('should have login modal', () => {
    // Write logic here
    expect(element(by.css('[data-target="#loginModal"]')).getText()).toEqual('Login');
  });

  it('should have register modal', () => {
    // Write logic here
    expect(element(by.css('[data-target="#registerModal"]')).getText()).toEqual('Register');
  });

  it('should have a carousel in base with two images in slide', () => {
    // Write logic here
    const list = element.all(by.className('carousel-item'));
    expect(list.count()).toEqual(2);
  });

  it('should have flex grid in base', () => {
    // Write logic here
    expect(element(by.className('d-flex'))).toBeTruthy();
  });

  it('should have product search button redirect to login modal when not loggedIn', () => {
    // Write logic here
    const searchButton = element(by.partialButtonText('Search'));
    element(by.css('input[placeholder="Search"]')).sendKeys('apple');
    searchButton.click();
    browser.sleep(2000);
    expect(element(by.id('loginModal'))).not.toBeUndefined();
  });
  it('should open register modal fill data and create new user', async () => {
    // Write logic here
    page.navigateToBase();
    const register = element(by.css('[data-target="#registerModal"]'));
    register.click();
    browser.sleep(2000);
    browser.driver.switchTo().activeElement();
    const button = element(by.partialButtonText('Register'));
    expect(button.isEnabled()).toBeFalsy();
    element(by.css('input[id="registerEmailId"]')).sendKeys('test@email.com');
    element(by.css('input[id="registerPasswordId"]')).sendKeys('test1234');
    await element(by.css('input[id="registerConfirmPasswordId"]')).sendKeys('test1234');
    expect(button.isEnabled()).toBeTruthy();
    button.click();
  });

  it('should have login modal to login', async () => {
    // Write logic here
    browser.sleep(2000);
    browser.driver.switchTo().activeElement();
    const loginButton = element(by.partialButtonText('Login'));
    expect(loginButton.isEnabled()).toBeFalsy();
    element(by.css('input[id="loginEmailId"]')).sendKeys('test@email.com');
    element(by.css('input[id="loginPasswordId"]')).sendKeys('test1234');
    expect(loginButton.isEnabled()).toBeTruthy();
    loginButton.click();
    browser.sleep(1000);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/products/all');
  });

  it('should have five tabs after login', () => {
    // Write logic here
    const list = element.all(by.className('nav-item'));
    expect(list.count()).toEqual(5);
  });

  it('should have product search to search products', () => {
    // Write logic here
    const searchButton = element(by.partialButtonText('Search'));
    element(by.css('input[placeholder="Search"]')).sendKeys('apple');
    searchButton.click();
    browser.sleep(2000);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '#/products/search/apple');
    expect(element.all(by.partialButtonText('Add To Cart')).count()).toEqual(2);
  });

  it('should have add to cart button to save in sessionStorage', () => {
    // Write logic here
    browser.get('#/products/fruit');
    const cards = element.all(by.partialButtonText('Add To Cart'));
    browser.wait(EC.elementToBeClickable(element(by.partialButtonText('Add To Cart'))), 5000);
    browser.actions().mouseMove(cards.get(4)).click().perform();
    browser.actions().mouseMove(cards.get(7)).click().perform();
    expect(browser.driver.executeScript('return sessionStorage.getItem("cart");')).toEqual(
      '[{"productId":"14","productName":"Guava","quantity":1,"price":50},{"productId":"21","productName":"Peach","quantity":1,"price":233}]'
      );
  });

  it('should have cart page with table and checkout button', () => {
    // Write logic here
    browser.get('#/cart');
    expect(element(by.tagName('table'))).toBeTruthy();
    expect(element(by.partialButtonText('Check Out'))).toBeTruthy();
    const heading = element.all(by.tagName('th'));
    expect(heading.get(0).getText()).toEqual('Product');
    expect(heading.get(1).getText()).toEqual('Price');
    expect(heading.get(2).getText()).toEqual('Quantity');
    expect(heading.get(3).getText()).toEqual('SubTotal');
    const quantityInput = element.all(by.css('input[type="number"]'));
    quantityInput.get(1).clear();
    quantityInput.get(1).sendKeys('3');
    expect(quantityInput.get(1).getAttribute('value')).toEqual('3');
  });

  it('should have account page with an accordion with two cards "User Details" and "Previous Orders"', () => {
    // Write logic here
    browser.get('#/account');
    expect(element(by.className('accordion'))).toBeTruthy();
    expect(element(by.partialButtonText('User Details'))).toBeTruthy();
    expect(element(by.partialButtonText('Orders'))).toBeTruthy();
    expect(element.all(by.className('card-body')).get(0).element(by.tagName('form'))).toBeTruthy();
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
