// An example of using the new conditions.
// Uses 'async/await', so Node.js >= 7.6.0

/* eslint-disable no-console */

const { Builder, By } = require('selenium-webdriver');
const until = require('../index'); // Replace with 'selenium-until-extra' in real-life examples

(async () => {
  const driver = new Builder().forBrowser('firefox').build();

  console.log('Testing \'until.urlIsNot\'...');
  await driver.get('http://www.seleniumhq.org/projects/webdriver/');
  await driver.findElement(By.css('#menu_download a')).click();
  console.log('Waiting for \'urlIsNot\' condition...');
  await driver.wait(until.urlIsNot('http://www.seleniumhq.org/projects/webdriver/'));
  console.log('Finished waiting.');

  console.log('Testing \'until.urlNotContains\'...');
  await driver.get('http://www.seleniumhq.org/projects/webdriver/');
  await driver.findElement(By.css('#menu_download a')).click();
  console.log('Waiting for \'urlNotContains\' condition...');
  await driver.wait(until.urlNotContains('webdriver'));
  console.log('Finished waiting.');

  console.log('Testing \'until.urlNotMatches\'...');
  await driver.get('http://www.seleniumhq.org/projects/webdriver/');
  await driver.findElement(By.css('#menu_download a')).click();
  console.log('Waiting for \'urlNotMatches\' condition...');
  await driver.wait(until.urlNotMatches(new RegExp('webdriver')));
  console.log('Finished waiting.');

  console.log('Testing \'until.titleIsNot\'...');
  await driver.get('http://www.seleniumhq.org/projects/webdriver/');
  await driver.findElement(By.css('#menu_download a')).click();
  console.log('Waiting for \'titleIsNot\' condition...');
  await driver.wait(until.titleIsNot('Selenium WebDriver'));
  console.log('Finished waiting.');

  console.log('Testing \'until.titleNotContains\'...');
  await driver.get('http://www.seleniumhq.org/projects/webdriver/');
  await driver.findElement(By.css('#menu_download a')).click();
  console.log('Waiting for \'titleNotContains\' condition...');
  await driver.wait(until.titleNotContains('WebDriver'));
  console.log('Finished waiting.');

  console.log('Testing \'until.titleNotMatches\'...');
  await driver.get('http://www.seleniumhq.org/projects/webdriver/');
  await driver.findElement(By.css('#menu_download a')).click();
  console.log('Waiting for \'titleNotMatches\' condition...');
  await driver.wait(until.titleNotMatches(new RegExp('WebDriver')));
  console.log('Finished waiting.');
})();
