
import { expect as chaiExpect } from 'chai';
describe('Functional Scenarios Suite',async()=>{
    it('regression-Scrolling on MouseHover',async()=>{
        await browser.url('https://rahulshettyacademy.com/AutomationPractice')
        await $('#mousehover').scrollIntoView()
        
        await $('#mousehover').moveTo()
        
        await $('=Top').click()
       
    })
    it('Javascript Alerts Handling', async() => {
        await browser.url('https://only-testing-blog.blogspot.com/2014/09/selectable.html')
       
    
        // const alertButton = await $("//button[contains(text(),'Double-Click Me To See Alert')]");
        const alertButton = await $("button")
        await alertButton.scrollIntoView()
        await alertButton.doubleClick()
        await alertButton.waitForExist()
        // const alertText = await browser.getAlertText()
        // chaiExpect(await alertText).to.equal('You double clicked me.. Thank You..')
        // await browser.acceptAlert()
        // await browser.pause(3000)
        //see the problem ASAP
    });

    it('Web Table Sort Validations',async ()=>{
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        await $('th:nth-child(1)').click()
        const veggieLocator2 = await $$('tr td:nth-child(1)')
        const veggieNames2 = await veggieLocator2.map(veggie=> veggie.getText())
        console.log(veggieNames2,'veggie A')
        const sliceVeggie = await veggieNames2.slice()
        const sortedVeggie = await sliceVeggie.sort()
        console.log(await sortedVeggie,'veggie B')
        chaiExpect(veggieNames2).to.deep.equal(sortedVeggie)    
    })
    it('Web Search Functionality',async()=>{
        await browser.url('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        await $('#search-field').setValue('tom')
        const veggieLocator = await $$('tr td:nth-child(1)')
        expect(veggieLocator).toBeElementsArrayOfSize({eq:1})
        console.log(await veggieLocator[0].getText())
        await expect(veggieLocator[0]).toHaveText('Tomato')

    })
})