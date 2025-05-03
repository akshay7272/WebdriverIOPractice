const loginPage = require ('../pageobjects/myLogin')
import { expect as chaiExpect } from 'chai';
describe('Ecommerce Application Rahul Shetty',async ()=>{
    
    it('Login Success Functionality',async()=>{
    await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
    console.log('Title of the Website',await browser.getTitle());
    await loginPage.Login('rahulshettyacademy','learning')
    // await expect($('.btn-primary')).toHaveAttr('class', expect.stringContaining('btn-primary'));
    const test = await loginPage.shopText.getText()
    await chaiExpect(test).to.equal('ProtoCommerce Homes')
    })

})