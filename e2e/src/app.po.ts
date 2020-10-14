import { browser, by, element, ElementFinder, $ } from 'protractor';

export class AppPage {
  navigateToBase() {
    return browser.get('/');
  }
  navigateToProductPage() {
    return browser.get('#/products/all');
  }
  navigateToCart() {
    return browser.get('#/cart');
  }
  navigateToaccount() {
    return browser.get('#/account');
  }
  toHeader(): ElementFinder {
    return element(by.tagName('<app-header>'));
  }
  // function to get navbar
  getNavbar() {
    return $('nav');
  }

}
