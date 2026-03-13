//automate basic navigation to two different websites in two seperate browser instances

import {test,expect} from "@playwright/test"

//Refer to the config file as well where I have added a new project for edge with the channel name as 'msedge'

test(`To run the redbus application in the chrome browser`, async function ({page},testInfo) { //here testInfo is the variable used to refer your project name

    test.skip(testInfo.project.name!=="edge")
    
    let url = "https://www.redbus.in";
    await page.goto(url)

    let currentURL = page.url()
    await expect(page).toHaveURL(currentURL)

    let pageTitle = await page.title()
    console.log(`Redbus Title: ${pageTitle}`)
    console.log(`Redbus URL: ${currentURL}`)

    let redbusWebElement = page.locator(`[title='redBus']`)
    await redbusWebElement.waitFor({state:"visible"})
})

test(`To run the flipkart application in the firefox browser`, async function ({page},testInfo ) {

    test.skip(testInfo.project.name!=="firefox")

    let url = "https://www.flipkart.com/"
    await page.goto(url)
    
    let currentURL = await page.url()
    await expect(page).toHaveURL(currentURL)

    let pageTitle = await page.title()
    console.log(`Flipkart Title: ${pageTitle}`)
    console.log(`Flipkart URL: ${currentURL}`)

    const alertMessageWebElement = await page.locator(`.DZh1Lq`)
    await alertMessageWebElement.waitFor({state:"visible"})
})