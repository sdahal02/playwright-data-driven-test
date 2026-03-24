import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { BoardPage } from '../pages/board-page';
import testData from '../test-data/test-scenarios.json';

test.describe('Task Verification', () => {
    let loginPage: LoginPage;
    let boardPage: BoardPage;

    // Runs once before every individual test case
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        boardPage = new BoardPage(page);

        // Step 1: Login to the application using the global credentials
        await loginPage.login(
            testData.credentials.username,
            testData.credentials.password
        );
    });

    // Dynamically generate tests from the scenarios array
    for (const scenario of testData.scenarios) {

        test(`${scenario.testCaseId} - ${scenario.description}`, async () => {

            // Step 2: Navigate to the target project
            await boardPage.selectProject(
                scenario.navigation.projectName
            );

            // Step 3: Verify task is in the correct column
            await boardPage.verifyTaskInColumn(
                scenario.expectedResults.taskName,
                scenario.expectedResults.columnName
            );

            // Step 4: Verify tags are present on the task
            await boardPage.verifyTaskTags(
                scenario.expectedResults.taskName,
                scenario.expectedResults.tags
            );

        });
    }
});