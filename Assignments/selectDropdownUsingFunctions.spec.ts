//using the reusable functions - to verify the functionality and selections within select dropdown components in Leaf PlayGround application


import { Locator, Page, test } from "@playwright/test"

test(`To use the functions for the playground methods`, async function ({ page }, testInfo) {
    test.skip(testInfo.project.name != "edge")

    await page.goto(`https://leafground.com/select.xhtml`)

    //UI automation tool dropdown 
    const parentTag = `//select[@class='ui-selectonemenu']`
    const childTagName = `option`

    //print and choose values from UI automation dropdown

    printAllDropdownValues(page, parentTag, childTagName)
    chooseValueFromDropdown(page, parentTag, 'label', 'Playwright') //params: page,parentTagxpath,selectCase, selectValue

    //Country Dropdown handling
    const prefCountry = await locateElementUsingLabelValue(page, 'Select Country')  //using the getLabelValue function to get the locator
    await click(prefCountry)

    //click value from country dropdown
    const countryValue = await locateElementsUsingliValue(page, 'India')
    await click(countryValue)

    //City dropdown 
    const prefCity = await locateElementUsingLabelValue(page, 'Select City')
    click(prefCity)

    //click value from city dropdown 
    const cityValue = await locateElementsUsingliValue(page, 'Chennai')
    click(cityValue)

    //choose language dropdown 
    const prefLanguage = await locateElementUsingLabelValue(page, 'Select Language')
    click(prefLanguage)

    //click value from Language dropdown 
    const languageValue = await locateElementsUsingliValue(page, 'Tamil')
    click(languageValue)

    //select 'two' irrespective of language chosen dropdown
    const prefSelect = await locateElementUsingLabelValue(page, 'Select Values')
    click(prefSelect)

    //selecting second value irrespective of options 
    const selectValue = await locateElementsUsingliValue(page, 'இரண்டு')
    click(selectValue)

    //choose three courses from dropdown - Dynamic dropdown

    let courses = ['Selenium WebDriver', 'PostMan', 'RestAssured', 'Playwright']
    for (let val = 0; val < courses.length; val++) {
        const eachWebElement = await locateElement(page, `//button[@aria-label='Show Options']`)
        await click(eachWebElement)

        const eachValue = await locateElement(page, `//li[text()='${courses[val]}']`)
        await click(eachValue)
    }

})

async function locateElement(page: Page, locatorValue: string) {
    const findElement = await page.locator(locatorValue)
    await findElement.waitFor({ state: "visible" })
    return findElement
}

async function locateElementUsingLabelValue(page: Page, locatorValue: string) {
    const findElement = await page.locator(`//label[text()='${locatorValue}']`)
    await findElement.waitFor({ state: "visible" })
    return findElement
}

async function locateElementsUsingliValue(page: Page, locatorValue: string) {
    const findElement = await page.locator(`//li[@data-label='${locatorValue}']`)
    await findElement.waitFor({ state: "visible" })
    return findElement
}

async function click(locatorValue: Locator) {
    await locatorValue.waitFor({ state: "visible" }) //verifying the element is present before performing the click action
    await locatorValue.click()
}

async function printAllDropdownValues(page: Page, parentLocator: string, childLocator: string) {
    const dropdownOptions = page.locator(parentLocator + '/' + childLocator)
    const dropdownCount = await dropdownOptions.count();

    //To print all the dropdown values 
    for (let index = 0; index < dropdownCount; index++) {
        let eachValue = await dropdownOptions.nth(index).innerText()
        console.log(`Option ${index}: ${eachValue}`)
    }
}

async function chooseValueFromDropdown(page: Page, parentLocator: string, selectCase: string, selectValue: string) {
    switch (selectCase) {
        case "label":
            await page.selectOption(parentLocator, { label: selectValue })
            break;
        case "value":
            await page.selectOption(parentLocator, { value: selectValue })
            break;
        case "index":
            await page.selectOption(parentLocator, { index: parseInt(selectValue) })
            break;
        default:
            await page.selectOption(parentLocator, { label: selectValue })
            break;
    }

}
