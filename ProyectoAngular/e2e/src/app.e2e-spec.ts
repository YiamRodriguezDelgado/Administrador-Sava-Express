
import { AppPage } from './app.po';
import { browser, by, element, protractor } from 'protractor';
describe('workspace-project App', () => {
  let page: AppPage;

  let numeroRandom=Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  let correo=numeroRandom+"cmeneses@espol.edu.ec"
  browser.manage().window().maximize();
  beforeEach(() => {
    page = new AppPage();
  });
  it('It should be able to log in a client previosly created', () => {
    page.navigateToLogin();
    element(by.id("email")).sendKeys("miguel@espol.edu.ec")
    element(by.id("password")).sendKeys("1234")
    element(by.id("button")).click()
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/inicio/paquetes');
    browser.sleep(200);
    element(by.id("CerrarSesion")).click()
  });
  it('It should be able to create his own new account', () => {
    page.navigateToLogin();
    element(by.id("mail")).sendKeys(numeroRandom+"carlitos@espol.edu.ec")
    element(by.id("pass")).sendKeys("12345")
    element(by.id("phone")).sendKeys("0981310246")
    element(by.id("contact-option")).click()
    element(by.id("submit")).click()
    browser.sleep(2000);
    browser.switchTo().alert().dismiss()
    browser.waitForAngular();
    element(by.id("email")).sendKeys("carlitos@espol.edu.ec")
    element(by.id("password")).sendKeys("12345")
    element(by.id("button")).click()
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:4200/#/inicio/paquetes');
    browser.sleep(200);
    element(by.id("CerrarSesion")).click()
  });
  it('should be able to create new users account',()=>{
    browser.driver.manage().window().maximize();
    let correo=numeroRandom+"cmeneses@espol.edu.ec"
    page.navigateToLogin();
    page.loginAsAdmin();
    element(by.id("button")).click();
    browser.sleep(200);
    element(by.id("routes-Clientes")).click();
    browser.sleep(200);
    element(by.id("addClients")).click();
    browser.sleep(200);
    element(by.id("cliente")).click()
    element(by.id("input-username")).sendKeys(correo)
    element(by.id("input-telefono")).sendKeys("0981310246")
    element(by.id("input-password")).sendKeys(1234)
    element(by.id("input-password2")).sendKeys(1234)
    element(by.id("sending")).click()
    browser.sleep(200);
    element(by.css(".swal2-confirm")).click()
    browser.sleep(200);
    
    expect(element(by.id(correo)).isDisplayed()).toBe(true)
  });
  it('should be able to create new admin account',()=>{
    let correoad=numeroRandom+"admin@espol.edu.ec"
    element(by.id("addClients")).click();
    browser.sleep(200);
    element(by.id("administrador")).click()
    element(by.id("input-username")).sendKeys(correoad)
    element(by.id("input-telefono")).sendKeys("0981310246")
    element(by.id("input-password")).sendKeys(1234)
    element(by.id("input-password2")).sendKeys(1234)
    browser.sleep(200);
     element(by.id("sending")).click()
    browser.sleep(200);
    element(by.css(".swal2-confirm")).click()
    browser.sleep(200);
    expect(element(by.id(correoad)).isDisplayed()).toBe(true)
  });
  it('should be able to create new packages',()=>{
    element(by.id("routes-Paquetes")).click();
    browser.sleep(200);
    element(by.id("addPackage")).click();
    browser.sleep(200);
    element(by.id("selection")).click()
    browser.sleep(200);
    element(by.id(correo)).click()
    element(by.id("tracking_number")).sendKeys(numeroRandom)
    element(by.id("price")).sendKeys(10)
    element(by.id("pounds")).sendKeys(12)
    element(by.id("arrival_date")).sendKeys("10-05-2022")
    element(by.id("file")).sendKeys("/Users/carloshumbertomenesesmurillo/Desktop/2022-08-25T01-06-08.542Z-running.png")
    browser.sleep(200);
    element(by.id("add")).click()
    browser.sleep(200);
    element(by.css(".swal2-confirm")).click()
    browser.sleep(100);
    expect(element(by.id(numeroRandom.toString())).isDisplayed()).toBe(true)
  })
  it('should be able to see the status of the new package created',()=>{
    browser.sleep(200);
    element(by.id("close")).click();
    browser.sleep(200);
    element(by.id("cerrarSesion")).click();
    browser.sleep(100);
    page.navigateToLogin();
    element(by.id("email")).sendKeys(correo)
    element(by.id("password")).sendKeys("1234")
    element(by.id("button")).click()
    browser.sleep(500);
    expect(element(by.id(numeroRandom.toString())).isDisplayed()).toBe(true)
  })
  it('should be able to send the package to Ecuador',()=>{
    browser.sleep(200);
    element(by.id("sending")).click()
    browser.sleep(200);
    element(by.id(numeroRandom.toString())).click()
    browser.sleep(200);
    element(by.id("ToEcuador")).click()
    browser.sleep(300);
    element(by.id("wayToEcuador")).click()
    browser.sleep(300);
    expect(element(by.id("ViewPackages")).isDisplayed()).toBe(true)
  })
});
