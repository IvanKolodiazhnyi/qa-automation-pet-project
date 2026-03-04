import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("#user-name");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    async performLogin(userName: string, password: string) {
        await this.usernameInput.fill(userName);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
