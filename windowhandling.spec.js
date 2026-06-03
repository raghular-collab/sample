import {test} from '@playwright/test'

test('window handling',async({page,context})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('(//div//input[@title="Search for Products, Brands and More"])[1]').fill('laptop')
    await page.keyboard.press('Enter');
    
    const [newtab] = await Promise.all([
    context.waitForEvent('page'),
    page.locator('//div[contains(text(),"MT8781")]').click()
    ])
    await newtab.waitForLoadState();
    console.log(await newtab.title());
})