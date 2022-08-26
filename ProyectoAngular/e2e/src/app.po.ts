import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToLogin() {
    return browser.get('/#/inicio/login');
  }
  getParagraphText() {
    return by.css('#button');
  }
  loginAsAdmin(){
    element(by.id("email")).sendKeys("admin@hotmail.com")
    element(by.id("password")).sendKeys("admin")
  }
  creatingRandomUser(){
    let email= Math.random()+"@hotmail.com"
  }
}
