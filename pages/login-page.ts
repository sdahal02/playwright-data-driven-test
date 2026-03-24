import { Page } from '@playwright/test';

export class LoginPage {
    private readonly appUrl = 'https://animated-gingersnap-8cf7f2.netlify.app/';

    constructor(private page: Page) { }

    async navigate() {
        await this.page.goto(this.appUrl);
    }

    async enterCredentials(username: string, password: string) {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
    }

    async submitLoginForm() {
        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }

    async login(username: string, password: string) {
        await this.navigate();
        await this.enterCredentials(username, password);
        await this.submitLoginForm();
    }
}