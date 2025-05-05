import { expect as chaiExpect } from 'chai';
// const fs = require('test/testdata/testloginfaildata.json')
const fs = require('../testdata/testloginfaildata.json')
describe('Ecommerce Application Rahul Shetty',async ()=>{
    
    fs.forEach(({username,password})=>{
    it('smoke-Login Fail Functionality',async()=>{
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        console.log('Title of the Website',await browser.getTitle());
        await $('#username').setValue(username)
        await $('#password').setValue(password)
        const radioButtons =  await $$('.customradio')
        await radioButtons[1].$('input').click()
        await $(".modal-body")
        await $("//button[@id='cancelBtn']").click()
        const selectEle = await $('select.form-control')
        await selectEle.selectByIndex(1)
        await selectEle.selectByAttribute('value','stud')
        await chaiExpect(await selectEle.getValue()).to.equal('stud')
        await selectEle.selectByVisibleText('Consultant')
        await $('#terms').click()
        await $('#signInBtn').click()
        const failConfirm = await $('.alert-danger strong')
        await failConfirm.waitForDisplayed({timeout:5000})
        const failText = await failConfirm.getText()
        await chaiExpect(failText).to.equal('Incorrect')
        
        })
    })
    
    
    
    
    it('Login Success Functionality',async()=>{
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    console.log('Title of the Website',await browser.getTitle());
    await $('#username').setValue('rahulshettyacademy')
    await $('#password').setValue('learning')
    const radioButtons =  await $$('.customradio')
    await radioButtons[1].$('input').click()
    await $(".modal-body")
    await $("//button[@id='cancelBtn']").click()
    const selectEle = await $('select.form-control')
    await selectEle.selectByIndex(1)
    await selectEle.selectByAttribute('value','stud')
    await chaiExpect(await selectEle.getValue()).to.equal('stud')
    await selectEle.selectByVisibleText('Consultant')
    await $('#terms').click()
    await $('#signInBtn').click()
    const button = await $('.btn-primary')
    await expect(button).toHaveAttr('class', expect.stringContaining('btn-primary'));
    const test = await $("//a[text()='ProtoCommerce Home']").getText()
    await chaiExpect(test).to.equal('ProtoCommerce Home')
    })


    it('Handling Dynamic Dropdowns controls using webdriverio',async()=>{
      
        await browser.url('https://rahulshettyacademy.com/AutomationPractice')
        
        await $('#autocomplete').setValue('ind')
        // await browser.pause(3000)
        const country = await $$('.ui-menu-item div')
        for (let i = 0; i < await country.length; i++) {
            if(await country[i].getText() == 'India') {
                await country[i].click();
                // await browser.pause(3000)
            }      
        }
    })

    // it('Handling Checkboxes Automation',async()=>{
    //     await browser.url('https://rahulshettyacademy.com/AutomationPractice')
    //     const CheckBoxes = await $$("input[type='checkbox']")
    //     await CheckBoxes[2].click()
       
    //     // console.log(await CheckBoxes[1].isSelected(),'ConsoleCheck')
    //     // console.log(await CheckBoxes[2].isSelected(),'ConsoleCheck')
    //     await expect(await CheckBoxes[2].isSelected()).toBe(true)
    //     await browser.saveScreenshot('CheckboxSelected.png')
    // })

    it('Handling Checkboxes Automation', async () => {
        await browser.url('https://rahulshettyacademy.com/AutomationPractice');
        
       
        const CheckBoxes = await $$("input[type='checkbox']");
        await CheckBoxes[2].click();
        await browser.waitUntil(
            async () => await CheckBoxes[2].isSelected(),
            {
              timeout: 3000,
              timeoutMsg: 'Checkbox was not selected after click'
            }
          );
    
        const isSelected = await CheckBoxes[2].isSelected();
        console.log(isSelected, 'ConsoleCheck');
        
    
        await expect(isSelected).toBe(true);
        await browser.saveScreenshot('CheckboxSelected.png');
    });



}
)