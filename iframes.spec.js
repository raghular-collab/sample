import{test} from '@playwright/test';

test('handling frames',async({page})=>{
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');

    await page.locator('#iFrame').click();
    const frame = page.frameLocator('iframe[src*="trainings"]');
    await frame.locator("//h3[text()='Selenium 3.0 Training']").click();
});

test('handling frames 1',async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
    const frame1 = page.frameLocator('iframe[src*="new-tab-sample.php"]').nth(0);
    await frame1.locator('.external-link').click();
});

test('handling frames 2',async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');
    const frame1 = page.frameLocator('iframe[src*="new-tab-sample.php"]').nth(1);
    await frame1.locator('.external-link').click();
})