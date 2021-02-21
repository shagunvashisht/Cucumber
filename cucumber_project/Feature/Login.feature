#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template 

Feature: Login
Background: Hitting The URL
		Given Launch the chrome browser
    When User open URL "https://admin-demo.nopcommerce.com/Login"
    
	@Sanity
  Scenario: Successful login with valid credentials
    
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on login
    Then Page Title should be "Dashboard / nopCommerce administration" 
    When User clicks on logout link
    Then page title should be "Your store. Login"
    And Close Browser
    
   @Regression
    Scenario Outline: Successful login with valid credentials

    And User enters Email as "<email>" and Password as "<password>"
    And Click on login
    Then Page Title should be "Dashboard / nopCommerce administration" 
    When User clicks on logout link
    Then page title should be "Your store. Login"
    And Close Browser 
    
     Examples: 
      | email  | password |  
      | admin@yourstore.com | admin | 
      | tom@yourstore.com |4343434 |
  