import{test} from '@playwright/test';

test('clicks',async({page})=>{
    await page.goto("https://xqa.io/practice/buttons");

    //double click
    await page.locator('#doubleClickBtn').dblclick();
    await page.waitForTimeout(2000);

    //right click
    await page.locator("//button[text()='Right Click Me']").click({button: 'right'});
    await page.waitForTimeout(2000);

    //click
    await page.locator('#dynamicClickBtn').click();
    await page.waitForTimeout(2000);
})
