import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;
  readonly searchBox: Locator;
  readonly firstNameReadonly: Locator;
  readonly firstNameInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Email address' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.signInButton = page.getByRole('button', { name: 'Sign in' });
    this.searchBox = page.getByRole('textbox', { name: 'Search for customers, rewards' });
    this.firstNameReadonly = page.locator('.field-readonly-container:has-text("Max")').first();
    this.firstNameInput = page.locator('input#first_name');
    this.saveButton = page.locator('button.field-action-button.save');
  }

  async goto(urlSuffix: string = '') {
    await this.page.goto(`https://demo-dashboard.helloagain.com/#/login/demo-qapilotcom-TyEOna${urlSuffix}`);
  }

  async login(email: string, pass: string) {
    // Handle potential intro image clicks if they appear
    if (await this.page.locator('img').nth(1).isVisible()) {
        await this.page.locator('img').nth(1).click();
    }
    
    await this.emailInput.fill(email);
    
    if (await this.page.locator('img').nth(1).isVisible()) {
        await this.page.locator('img').nth(1).click();
    }
    
    await this.passwordInput.fill(pass);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async searchAndSelectUser(query: string, resultEmail: string) {
    await this.searchBox.click();
    await this.searchBox.fill(query);
    const result = this.page.locator(`span.text-truncate:has-text("${resultEmail}")`).first();
    await result.click();
    await this.page.waitForLoadState('networkidle');
  }

  async editFirstName(newName: string) {
    await this.firstNameReadonly.click();
    await this.firstNameInput.fill(newName);
    await this.saveButton.click();
  }

  async verifyFirstNameInApp(expectedName: string) {
    await expect(this.page.locator('#app')).toContainText(expectedName);
  }
}
