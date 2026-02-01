abstract class BasePage1 {
    protected readonly url: string;

    constructor(url: string) {
        this.url = url;
    }

    goto() {
        console.log(`Navigating to ${this.url}`);
    }
}

interface Auth {
    login(): void;
    logout(): void;
}

class LoginPage1 extends BasePage1 implements Auth {
    constructor() {
        super("https://example.com/login");
    }

    private readonly loginBtn = "#login";
    login() {
        console.log("Logging in when clicking on login button ", this.loginBtn);
    }
    logout() {
        console.log("Logging out");
    }
}

const loginPage1 = new LoginPage1();
loginPage1.goto();
loginPage1.login();
loginPage1.logout();
