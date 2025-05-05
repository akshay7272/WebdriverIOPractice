import { expect as chaiExpect } from 'chai';
describe('Handling Child Windows And Frames With WebdriverIO',async()=>{
    it('Regression-Child Window Handling',async()=>{
        await browser.url('/loginpagePractise')
        await $('.blinkingText').click()
        //If Links open in new window as per Browser Level/Application Level
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.pause(3000)
        console.log(await $('h1').getText(),'text')
        const tabText = await $('h1').getText()
        await chaiExpect(await tabText).to.deep.equal('DOCUMENTS REQUEST')
        // console.log(await browser.getTitle(),'Title of the page')


        //Opening New Tab By Our Own Automation
        await browser.newWindow('https://rahulshettyacademy.com')
        console.log(await browser.getTitle(),'New Title')
        await browser.pause(3000)
        await browser.switchWindow('https://rahulshettyacademy.com/loginpagePractise')
        await browser.pause(3000)
        console.log(await browser.getTitle(),'New Title')
        
    })

    xit('Handling Frames',async()=>{

    })
})