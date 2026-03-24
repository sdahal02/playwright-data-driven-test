import { Page, expect } from '@playwright/test';

export class BoardPage {

    constructor(private page: Page) { }

    async selectProject(projectName: string) {
        await this.page
            .getByText(projectName, { exact: true })
            .first()
            .click();
    }

    async verifyTaskInColumn(taskName: string, columnName: string) {
        const column = this.page.locator('div').filter({
            has: this.page.locator('h2').filter({
                hasText: new RegExp(`^${columnName}`)
            })
        }).first();

        await expect(
            column.getByText(taskName, { exact: true })
        ).toBeVisible();
    }

    async verifyTaskTags(taskName: string, tags: string[]) {
        const taskCard = this.page.locator('div').filter({
            has: this.page.getByRole('heading', { name: taskName, exact: true })
        }).last();

        await expect(taskCard).toBeVisible();

        for (const tag of tags) {
            const tagElement = taskCard.getByText(tag, { exact: true });
            await expect(tagElement).toBeVisible();
        }
    }
}