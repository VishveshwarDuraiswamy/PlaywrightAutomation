//Verify the functionality and selections within select dropdown components in Leaf PlayGround application

import { test, defineConfig } from "@playwright/test"

export default defineConfig({
    use: {
        viewport: null,
        launchOptions: {
            args: ['--start-maximized']
        }
    }
});

test(`To verify the functionality of dropdown related validations in Leafground`, async function ({ page }, testInfo) {
    test.skip(testInfo.project.name != "edge")

    const url = `https://leafground.com/select.xhtml`
    await page.goto(url)

    const uiAutomationParentTag = `//select[@class='ui-selectonemenu']`
    const uiAutomationOptions = await page.locator(uiAutomationParentTag + `/option`)

    //Select the favourite UI automation tool as "Playwright"
    const uiAutomationTool = "Playwright"
    await page.selectOption(uiAutomationParentTag, { label: 'Playwright' })

    const uiAutomationDropdownCount = await uiAutomationOptions.count()
    console.log(`UI automation dropdown count: ${uiAutomationDropdownCount}`)

    console.log(`\nUI automation tools available in the dropdown: `)
    for (let index = 0; index < uiAutomationDropdownCount; index++) {
        const uiAutomationTextValues = await uiAutomationOptions.nth(index).innerText()
        console.log(uiAutomationTextValues)
    }

    //Choosing the preferred country as India
    await page.locator(`//label[text()='Select Country']`).click()
    const countryItems = await page.locator(`//ul[contains(@id,'country_items')]/li`)
    const countryItemsDropDownCount = await countryItems.count()

    console.log(`\nPrinting all the countries from the dropdown:`)
    for (let i = 0; i < countryItemsDropDownCount; i++) {
        console.log(await countryItems.nth(i).innerText())
    }

    const preferredCountry = 'India'
    await page.locator(`//li[@data-label='${preferredCountry}']`).click()

    //confirm Cities belongs to the country selected 
    await page.locator(`//label[text()='Select City']`).click()

    const preferredCity = 'Chennai'
    const cityDropdown = page.locator(`//li[@data-label='${preferredCity}']`)
    await cityDropdown.waitFor({ state: "visible" }) //actually verifying the city dropdown value before clicking on it

    await cityDropdown.click()


    //choose a language and print all the values in the dropdown 
    await page.locator(`//label[text()='Select Language']`).click()

    const preferredLanguage = 'Tamil'
    const languageDropdown = page.locator(`//li[@data-label='${preferredLanguage}']`)
    await languageDropdown.waitFor({ state: "visible" })

    const languageOptions = await page.locator(`//ul[contains(@id,'lang_items')]//li`)
    const languageOptionsDropdownCount = await languageOptions.count()
    console.log(`\nPreferred Language Dropdown count: ${languageOptionsDropdownCount}`)

    console.log(`\nPreferred Language Dropdown values: `)
    for (let index = 0; index < languageOptionsDropdownCount; index++) {
        console.log(await languageOptions.nth(index).innerText())
    }

    await languageDropdown.click()

    //select two irrespective of the language chosen dropdown: so we have to blindly choose the index:2
    const selectValuesWebElement = await page.locator(`//label[text()='Select Values']`)
    await selectValuesWebElement.click()

    let index = 2
    const selectValuesOfSecondIndex = `//ul[contains(@id,'value_items')]//li[${index}]`
    await page.locator(selectValuesOfSecondIndex).click()

    const selectedValue = await page.locator(`//div[contains(@id,'value')]//following::label[contains(@class,'ui-selectonemenu-label')]`).first().innerText()
    console.log(`Selected value for options: ${selectedValue}`)

    //choose three courses from dropdown - Dynamic dropdown

    let courses = ['Selenium WebDriver', 'PostMan', 'RestAssured', 'Playwright']
    for (let val = 0; val < courses.length; val++) {
        await page.locator(`//button[@aria-label='Show Options']`).click()
        await page.locator(`//li[text()='${courses[val]}']`).click()
    }

})

