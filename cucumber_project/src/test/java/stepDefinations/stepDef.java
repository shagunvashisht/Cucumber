package stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageObject.LoginPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class stepDef extends baseClass{
	
	//public WebDriver driver;
	@Given("Launch the chrome browser")
	public void launch_the_chrome_browser() {
		WebDriverManager.chromedriver().setup();
		driver =new ChromeDriver();
		lp=new LoginPage(driver);
	    // Write code here that turns the phrase above into concrete actions

	}

	@When("User open URL {string}")
	public void user_open_URL(String url) {
	    // Write code here that turns the phrase above into concrete actions
		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("User enters Email as {string} and Password as {string}")
	public void user_enters_Email_as_and_Password_as(String emaiL, String pwd) {
	    // Write code here that turns the phrase above into concrete actions
	lp.setUserName(emaiL);
	lp.setPassword(pwd);
	}

	@When("Click on login")
	public void click_on_login() {
	    // Write code here that turns the phrase above into concrete actions
	    lp.clickLogin();
	}

	@Then("Page Title should be {string}")
	public void page_Title_should_be(String expTitle) throws InterruptedException {
	   if(driver.getPageSource().contains("Login was unsuccessful")){
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	   Assert.assertTrue(false);
	   }
	   else {
		   Assert.assertEquals(expTitle,driver.getTitle());
	   }
	   Thread.sleep(3000);
	}
	@When("User clicks on logout link")
	public void user_clicks_on_logout_link() {
	    // Write code here that turns the phrase above into concrete actions
		lp.clickLogout();
	}

	@Then("page title should be {string}")
	public void page_title_should_be(String expTitle2) {
	    // Write code here that turns the phrase above into concrete actions
		 Assert.assertEquals(expTitle2,driver.getTitle());
	}


	@Then("Close Browser")
	public void close_Browser() {
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	}


}
