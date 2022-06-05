"use strict";

var { Given } = require("cucumber");
var { When } = require("cucumber");
var { Then } = require("cucumber");

// Use the external Chai As Promised to deal with resolving promises in
// expectations
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { Assertion } = require("chai");
chai.use(chaiAsPromised);
const expect = chai.expect;

// GIVEN
Given(/^La página del sistema "([^"]*)"$/, function (url, callback) {
  browser.get(url).then(function () {
    callback();
  });
});

//WHEN
When(
  /^ingreso el nombre "([^"]*)" en el campo "([^"]*)"$/,
  function (inputTextEntry, inputName) {
    return browser.driver
      .findElement(by.css('[formControlName="' + inputName + '"]'))
      .sendKeys(inputTextEntry);
  }
);

When(
  /^ingreso el apellido "([^"]*)" en el campo "([^"]*)"$/,
  function (inputTextEntry, inputName) {
    return browser.driver
      .findElement(by.css('[formControlName="' + inputName + '"]'))
      .sendKeys(inputTextEntry);
  }
);

When(
  /^ingreso el número (\d+) en el campo "([^"]*)"$/,
  function (inputTextEntry, inputName) {
    return browser.driver
      .findElement(by.css('[formControlName="' + inputName + '"]'))
      .sendKeys(inputTextEntry);
  }
);

When(/^presiono botón "([^"]*)"$/, function (buttonName) {
  return browser.driver
    .findElement(by.css('[name="' + buttonName + '"]'))
    .click();
});

//THEN
Then(/Veo el mensaje "([^"]*)"$/, function (mensaje) {
  browser.driver.sleep(1000);
  browser.waitForAngular().then(function () {
    expect(
      element(by.css('[name="alertMessage"]')).getText()
    ).to.eventually.equal(mensaje);
  });
});
