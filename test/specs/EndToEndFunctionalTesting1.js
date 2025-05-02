import { expect as chaiExpect } from "chai";

describe("EndToEndFunctionalTesting1 WebdriverIO", () => {
  it("Login Success & Add to cart + Comparing Total of cart items", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    await $("#username").setValue("rahulshettyacademy");
    await $("#password").setValue("learning");

    const radioButtons = await $$(".customradio");
    await radioButtons[1].$("input").click();

    const modal = await $(".modal-body");
    await modal.waitForExist({ timeout: 5000 });
    await $("#okayBtn").click();

    const selectEle = await $("select.form-control");
    await selectEle.selectByIndex(1);
    chaiExpect(await selectEle.getValue()).to.equal("teach");

    await $("#terms").click();
    await $("#signInBtn").click();
    await browser.keys(['Escape']);

    const button = await $(".btn-primary");
    await button.waitForExist({ timeout: 5000 });
    await expect(button).toHaveAttr("class", expect.stringContaining("btn-primary"));
    await browser.keys(['Escape']);
    const Products = ["Samsung Note 8", "Nokia Edge"];
    const productsData = await $$(".card.h-100");
    console.log("Total products found:", productsData.length);
    await browser.keys(['Escape']);

    for (const productCard of productsData) {
      const productNameElement = await productCard.$(".card-body .card-title a");
      const productName = await productNameElement.getText();
      console.log(`Found product: ${productName}`);
      await browser.keys(['Escape']);
      if (Products.includes(productName)) {
        const buttonAddTo = await productCard.$(".card-footer button");
        await buttonAddTo.waitForClickable({ timeout: 5000 });
        await buttonAddTo.click();
        await browser.keys(['Escape']);
      }
    }
   
    await $(".nav-link.btn.btn-primary").click()
    await browser.keys(['Escape']); // Checkout
    // await cart.waitForClickable({ timeout: 5000 });
    // await cart.click()

    // Wait for cart table
    const productPrices = await $$("//tr/td[4]/strong");
   
    let totalPrice = 0;
    for (const element of productPrices) {
      const eleText = await element.getText(); 
      const cleaned = eleText.replace(/[^\d]/g, "");
      const numericValue = parseInt(cleaned, 10);
      totalPrice += numericValue;
    }

    const FinalOutcome = await $("td[class='text-right'] h3 strong");
    await FinalOutcome.waitForExist({ timeout: 5000 });
    const finalText = await FinalOutcome.getText();
    const cleaned2 = finalText.replace(/[^\d]/g, "");
    const numericValue2 = parseInt(cleaned2, 10);

    console.log(`Calculated total: ${totalPrice}, Displayed total: ${numericValue2}`);
    await chaiExpect(totalPrice).to.equal(numericValue2);
    await $('.btn-success').click()
    await browser.keys(['Escape']);
    await $('#country').setValue('ind')
    // await browser.pause(3000)
    await $('.lds-ellipsis').waitForExist({reverse:true})
    await $("//a[normalize-space()='India']").click()
    // await $('#checkbox2').click()
    await $("input[value='Purchase']").click()
    const assertSuccess = await $('.alert-success strong')
    const dataSucess = await assertSuccess.getText()
    console.log(dataSucess,'ddd')
    chaiExpect(dataSucess).to.deep.equal('Success!')
    // await browser.pause(3000)
  });
});
