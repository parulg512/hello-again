import { test } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Customer Management', () => {
  let dashboard: DashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboard = new DashboardPage(page);
    await dashboard.goto();
  });

  test('should successfully update customer first name to Maximilian', async () => {
    // 1. Arrange: Login to the system
    await dashboard.login('guptaparul512@gmail.com', 'k8GN6xL5wk');

    // 2. Act: Search for the specific user and edit their name
    await dashboard.searchAndSelectUser('max.mustermann', 'max.mustermann@helloagain.at');
    await dashboard.editFirstName('Maximilian');

    // 3. Assert: Verify the name update was successful
    await dashboard.verifyFirstNameInApp('Maximilian');
  });
});
