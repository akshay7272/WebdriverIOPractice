import { expect as chaiExpect } from "chai";
const loginPage = require('../pageobjects/myLogin')
const ShopPage = require('../pageobjects/POEndtoEndShopPage')
const ReviewPage = require('../pageobjects/POEndtoEndReviewPage')
const ConfirmPage = require('../pageobjects/POEndtoEndConfirmPage')

describe("EndToEndFunctionalTesting1 WebdriverIO", () => {
  it("Login Success & Add to cart + Comparing Total of cart items", async () => {
    
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await loginPage.userName.setValue("rahulshettyacademy");
    await loginPage.passWord.setValue("learning");
   

    const radioButtons = await $$(".customradio");
    await radioButtons[1].$("input").click();

    const modal = await $(".modal-body");
    await modal.waitForExist({ timeout: 5000 });
    await $("#okayBtn").click();

    const selectEle = await $("select.form-control");
    await selectEle.selectByIndex(1);
    chaiExpect(await selectEle.getValue()).to.equal("teach");

    await $("#terms").click();
    await loginPage.signIn.click();

    const button = await $(".btn-primary");
    await button.waitForExist({ timeout: 5000 });
    await expect(button).toHaveAttr("class", expect.stringContaining("btn-primary"));
    
    const Products = ["Samsung Note 8", "Nokia Edge"];
    await ShopPage.AddProductsToCart(Products);
    await $(".nav-link.btn.btn-primary").click()

    // Wait for cart table
    await ReviewPage.cartTotal()
    await ReviewPage.finalOutcome()
    const { totalPrices, numericValue2 } = await ReviewPage.finalOutcome();
    chaiExpect(totalPrices).to.equal(numericValue2);
    await $('.btn-success').click()
    await $('#country').setValue('ind')
    await $('.lds-ellipsis').waitForExist({reverse:true})
    await $("//a[normalize-space()='India']").click()
    await $("input[value='Purchase']").click()
    //Final Success Text Confirmation
    await ConfirmPage.ConfirmText()
  });
});
