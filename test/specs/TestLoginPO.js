const loginPage = require ('../pageobjects/myLogin')
import { expect as chaiExpect } from 'chai';
describe('Ecommerce Application Rahul Shetty',async ()=>{
    
    it('Login Success Functionality',async()=>{
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    console.log('Title of the Website',await browser.getTitle());
    loginPage.Login('rahulshettyacademy','learning')
    const button = await $('.btn-primary')
    await expect(button).toHaveAttr('class', expect.stringContaining('btn-primary'));
    const test = await $("//a[text()='ProtoCommerce Home']").getText()
    await chaiExpect(test).to.equal('ProtoCommerce Home')
    })

})