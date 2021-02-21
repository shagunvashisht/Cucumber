$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on logout link",
  "keyword": "When "
});
formatter.step({
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "tom@yourstore.com",
        "4343434"
      ]
    }
  ]
});
formatter.background({
  "name": "Hitting The URL",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.user_open_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.page_Title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on logout link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.user_clicks_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Hitting The URL",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Launch the chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.launch_the_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User open URL \"https://admin-demo.nopcommerce.com/Login\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.user_open_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User enters Email as \"tom@yourstore.com\" and Password as \"4343434\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.page_Title_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefinations.stepDef.page_Title_should_be(stepDef.java:50)\r\n\tat ✽.Page Title should be \"Dashboard / nopCommerce administration\"(file:Feature/Login.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on logout link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.user_clicks_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});