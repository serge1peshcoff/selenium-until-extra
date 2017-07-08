const selenium = require('selenium-webdriver');

const until = selenium.until;
const Condition = selenium.Condition;
const WebElementCondition = selenium.WebElementCondition;

// exporting Selenium bindings
const seleniumBindings = Object.keys(until);
for (const binding of seleniumBindings) {
  module.exports[binding] = until[binding];
}

// ... and adding some more

/**
 * Creates a condition that will wait for the current page's title to not match the
 * given value.
 *
 * @param {string} title The expected page title.
 * @return {!Condition<boolean>} The new condition.
 */
exports.titleIsNot = function titleIsNot(title) {
  return new Condition(
    'for title not to be ' + JSON.stringify(title),
    driver =>  driver.getTitle().then(t => t !== title));
};

/**
 * Creates a condition that will wait for the current page's title to not contain
 * the given substring.
 *
 * @param {string} substr The substring that should not be present in the page
 *     title.
 * @return {!Condition<boolean>} The new condition.
 */
exports.titleNotContains = function titleNotContains(substr) {
  return new Condition(
    'for title not to contain ' + JSON.stringify(substr),
    driver => driver.getTitle().then(title =>  title.indexOf(substr) === -1));
};

/**
 * Creates a condition that will wait for the current page's title to not match the
 * given regular expression.
 *
 * @param {!RegExp} regex The regular expression to test against.
 * @return {!Condition<boolean>} The new condition.
 */
exports.titleNotMatches = function titleNotMatches(regex) {
  return new Condition('for title to not match ' + regex,
    driver => driver.getTitle().then(title => !regex.test(title)));
};

/**
 * Creates a condition that will wait for the current page's url to not match the
 * given value.
 *
 * @param {string} url The page URL to not match.
 * @return {!Condition<boolean>} The new condition.
 */
exports.urlIsNot = function urlIsNot(url) {
  return new Condition(
    'for URL not to be ' + JSON.stringify(url),
    driver => driver.getCurrentUrl().then(u => u !== url));
};

/**
 * Creates a condition that will wait for the current page's url to not contain
 * the given substring.
 *
 * @param {string} substrUrl The substring that should not be present in the current
 *     URL.
 * @return {!Condition<boolean>} The new condition.
 */
exports.urlNotContains = function urlNotContains(substrUrl) {
  return new Condition(
    'for URL not to contain ' + JSON.stringify(substrUrl),
    driver => driver.getCurrentUrl().then(url => url.indexOf(substrUrl) === -1));
};

/**
 * Creates a condition that will wait for the current page's url to not match the
 * given regular expression.
 *
 * @param {!RegExp} regex The regular expression to test against.
 * @return {!Condition<boolean>} The new condition.
 */
exports.urlNotMatches = function urlNotMatches(regex) {
  return new Condition(
    'for URL not to match ' + regex,
    driver => driver.getCurrentUrl().then(url => !regex.test(url)));
};
