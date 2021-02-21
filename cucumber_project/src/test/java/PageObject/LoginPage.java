package PageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

	public WebDriver ldriver;

	public LoginPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
	}
@FindBy( id="Email" )
WebElement email;

@FindBy(id="Password")
WebElement password;

@FindBy(xpath="//input[@value='Log in']")
WebElement SubmitButton;

@FindBy(xpath="//a[text()='Logout']")
WebElement logout;

public void setUserName(String uname) {
	email.clear();
	email.sendKeys(uname);

}

public void setPassword(String pwd) {
	password.clear();
	password.sendKeys(pwd);
}

public void clickLogin() {
	SubmitButton.click();
}

public void clickLogout() {
	logout.click();
}

}

