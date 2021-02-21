package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Feature", //to specify which feature file
		glue="stepDefinations", //to specify which stepdef file to run
		monochrome=true, //to remove unnecessary char in console
		dryRun=false, //will run testcase when false if true if method declared in stepdef file
		plugin= {"pretty","html:test-output"}, //generate html  -pretty looking
		tags= {"@Regression"} //to run specific scenario of feature file
		
		
)		
		
		
public class testRunner {

}
