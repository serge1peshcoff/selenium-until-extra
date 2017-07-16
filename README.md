# selenium-until-extra

![](https://img.shields.io/npm/dt/selenium-until-extra.svg) ![](https://img.shields.io/travis/serge1peshcoff/selenium-until-extra.svg) ![](https://img.shields.io/coveralls/serge1peshcoff/selenium-until-extra.svg)

![NPM](https://nodei.co/npm/selenium-until-extra.png?downloads=true&downloadRank=true&stars=true) ![NPM](https://nodei.co/npm-dl/selenium-until-extra.png?height=2)

A library that add some extra methods to `selenium-webdriver`'s `until` module.

### Motivation

I was writing my personal project using `selenium-webdriver` and I needed some extra conditions to wait upon. So I've opened the issue on Selenium's GitHub to add this methods, and apparently they don't want to add it. So I decided to make a library that implement some extra functionality and make it open source.

### API

Just `require('selenium-until-extra')` instead of using `selenium-webdriver's` `until`. Like that:

```
const { Builder, By } = require('selenium-webdriver');
const until = require('selenium-until-extra');
```
The `selenium-until-extra` library exports all the Selenium `until` methods and adds some more:

- `until.urlIsNot(url)` - waits for URL not to be equal to `url`
- `until.urlNotContains(substring)` - waits for URL not to contain `substring`
- `until.urlNotMatches(regex)` - waits for URL not to match `regex`
- `until.titleIsNot(title)` - waits for title not to be equal to `title`
- `until.titleNotContains(substring)` - waits for title not to contain `substring`
- `until.titleNotMatches(regex)` - waits for URL title to match `regex`
- `until.pageContainsText(text)` - waits for page to contain `text`
- `until.pageNotContainsText(text)` - waits for page not to contain `text`

This list will most likely be increased in the future.

## Contribution

All issues and PRs are welcomed and appreciated!
When submitting an issue, please provide as more details as possible, such as:
- bug details and how to reproduce it
- your OS, `node` and library versions

When submitting the PR, please keep this in mind:
- we are using ESLint, the static code analyzer, to keep the code style consistent. Please make sure that your PR matches that code style by using `npm run lint`, if it shows no errors, then everything's fine. You can also use `npm run lint:fix` to auto-fix some issues.
- we have an automated testing, so please make sure all the tests pass before making a PR and if you want to add some extra functions to the library, please write tests for it.
- you can be asked to refactor/improve/rebase your PR.

If you want to suggest something new, you can make an issue about that, and we'll figure that out!
