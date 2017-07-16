const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const server = require('./server');
const until = require('../index');

const expect = chai.expect;
chai.use(chaiAsPromised);

let driver;

before(() => {
  const options = new chrome.Options();
  options.addArguments('headless', 'disableGpu');

  driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
});
after(() => driver.quit());

beforeEach(server.start);
afterEach(server.stop);

describe('test url functions', () => {
  describe('.urlIsNot', () => {
    it('should wait properly if the redirect url is right', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.urlIsNot('http://localhost:3000/first'))))
        .to.be.fulfilled;
    });

    it('should fail if url doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.urlIsNot('http://localhost:3000/first'), 1500)))
        .to.be.rejected;
    });
  });

  describe('.urlNotContains', () => {
    it('should wait properly if the redirect url contains specified substring', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.urlNotContains('first'))))
        .to.be.fulfilled;
    });

    it('should fail if url doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.urlNotContains('first'), 1500)))
        .to.be.rejected;
    });
  });

  describe('.urlNotMatches', () => {
    it('should wait properly if the redirect url matches the regexp', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.urlNotMatches(new RegExp('first')))))
        .to.be.fulfilled;
    });

    it('should fail if url doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.urlNotMatches(new RegExp('first')), 1500)))
        .to.be.rejected;
    });
  });
});

describe('test title functions', () => {
  describe('.titleIsNot', () => {
    it('should wait properly if the new title is the needed one', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.titleIsNot('First page title that contains a word \'banana\''))))
        .to.be.fulfilled;
    });

    it('should fail if title doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.titleIsNot('First page title that contains a word \'banana\''), 1500)))
        .to.be.rejected;
    });
  });

  describe('.titleNotContains', () => {
    it('should wait properly if the new title contains a specified substring', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.titleNotContains('banana'))))
        .to.be.fulfilled;
    });

    it('should fail if title doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.titleNotContains('banana'), 1500)))
        .to.be.rejected;
    });
  });

  describe('.titleNotMatches', () => {
    it('should wait properly if the new title matches the regexp', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.titleNotMatches(new RegExp('banana')))))
        .to.be.fulfilled;
    });

    it('should fail if title doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.titleNotMatches(new RegExp('banana')), 1500)))
        .to.be.rejected;
    });
  });
});

describe('test content', () => {
  describe('.pageContainsText', () => {
    it('should wait properly if the new page contains specified text', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.pageContainsText('nope im a text'))))
        .to.be.fulfilled;
    });

    it('should fail if content doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.pageContainsText('nope im a text'), 1500)))
        .to.be.rejected;
    });
  });

  describe('.pageNotContainsText', () => {
    it('should wait properly if the new page doesn\'t contains necessary string', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.findElement(webdriver.By.id('redirectToSecond')).click())
        .then(() => driver.wait(until.pageNotContainsText('hello im not a text'))))
        .to.be.fulfilled;
    });

    it('should fail if content doesn\'t change', () => {
      return expect(driver.get('http://localhost:3000/first')
        .then(() => driver.wait(until.pageNotContainsText('hello im not a text'), 1500)))
        .to.be.rejected;
    });
  });
});
