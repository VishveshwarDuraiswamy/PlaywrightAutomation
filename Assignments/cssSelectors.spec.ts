//Working with Leaf taps application and interact with elements on a web page using different locator

import {test, chromium, expect, firefox} from "@playwright/test"

test(`To interact with Leaf Taps application`,async ({browserName})=> {

    test.skip(browserName!=='firefox') 
    
    const browser   = firefox.launch()
    const context   = await (await browser).newContext()
    const page      = await context.newPage()
    
    let url = "http://leaftaps.com/opentaps/control/main"
    await page.goto(url)
    await expect(page).toHaveURL(url)

    let username = "DemoCSR"
    let password = "crmsfa"
    
    await page.locator(`#username`).fill(username)
    await page.locator(`#password`).fill(password)

    await page.locator(`.decorativeSubmit`).click()

    const crmsfaWebElement = await page.locator(`[for='crmsfa']`)

    await crmsfaWebElement.waitFor({state:"visible"})

    let pageTitle = await page.title()
    console.log(`Page Title after login: ${pageTitle}`)
    await expect(page).toHaveTitle(pageTitle)

    await crmsfaWebElement.click()    

    const leadsWebElement = await page.locator(`.sectionTabButtonUnselected a `).first()
    await leadsWebElement.waitFor({state:"visible"})

    pageTitle = await page.title()
    console.log(`Page Title after cmsfa: ${pageTitle}`)
    await expect(page).toHaveTitle(pageTitle)

    await leadsWebElement.click()

    const createLeadWebElement = await page.locator(`.frameSectionBody li`).nth(1)
    await createLeadWebElement.waitFor({state:"visible"})

    pageTitle = await page.title()
    console.log(`Page Title after clicking on Leads: ${pageTitle}`)
    await expect(page).toHaveTitle(pageTitle)

    createLeadWebElement.click()

    let companyName     = "Nagarro Software Pvt. Ltd"
    let firstName       = "Vishveshwar"
    let lastName        = "Duraiswamy"
    let saluation       = "Welcome to Test Leaf, Vishveshwar"
    let leadTitle       = "Playwright Automation Test Engineer"
    let annualRevenue   = 1000000
    let department      = "Testing"
    let phoneNumber     = 9578184957
    
    const createLeadHeaderWebElement = await page.locator(`#sectionHeaderTitle_leads`)
    await createLeadHeaderWebElement.waitFor({state:"visible"})

    pageTitle = await page.title()
    console.log(`Page Title after clicking Create Lead button: ${pageTitle}`)
    await expect(page).toHaveTitle(pageTitle)

    await page.locator(`#createLeadForm_companyName`).fill(companyName)
    await page.locator(`[id='createLeadForm_firstName']`).fill(firstName)
    await page.locator(`#createLeadForm_lastName`).fill(lastName)
    await page.locator(`[name='personalTitle']`).fill(saluation)
    await page.locator(`[name='generalProfTitle']`).fill(leadTitle)
    await page.locator(`#createLeadForm_annualRevenue`).fill(annualRevenue.toString())
    await page.locator(`#createLeadForm_departmentName`).fill(department)
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(phoneNumber.toString())

    await page.locator(`input[value='Create Lead']`).click()

    const viewLeadWebElement = await page.locator(`#sectionHeaderTitle_leads`)
    await viewLeadWebElement.waitFor({state:"visible"})

    pageTitle = await page.title()
    console.log(`Page Title after lead creation: ${pageTitle}`)
    await expect(page).toHaveTitle(pageTitle)
})