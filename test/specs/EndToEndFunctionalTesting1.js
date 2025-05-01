import { expect as chaiExpect } from "chai";
describe("EndToEndFunctionalTesting1 WebdriverIO", async () => {
  it("Login Success Functionality", async () => {
    await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
    // console.log('Title of the Website',await browser.getTitle());
    await $("#username").setValue("rahulshettyacademy");
    await $("#password").setValue("learning");
    const radioButtons = await $$(".customradio");
    await radioButtons[1].$("input").click();
    await $(".modal-body");
    await $("//button[@id='okayBtn']").click();
    const selectEle = await $("select.form-control");
    await selectEle.selectByIndex(1);
    // await selectEle.selectByAttribute('value','stud')
    await chaiExpect(await selectEle.getValue()).to.equal("teach");
    // await selectEle.selectByVisibleText('Consultant')
    await $("#terms").click();
    await $("#signInBtn").click();
    const button = await $(".btn-primary");
    await expect(button).toHaveAttr(
      "class",
      expect.stringContaining("btn-primary")
    );

    //Step2 - Gathering Product Info and clicking on Nokia Edge
    const Products = ['Samsung Note 8', 'Nokia Edge']
    const productsData = await $$(".card.h-100"); // Corrected selector
    console.log("Total products found:", productsData.length);

    for (let i = 0; i < productsData.length; i++) {
        const productCard = productsData[i];
      
        // Get the product name from the anchor tag inside card-body
        const productNameElement = await productCard.$(".card-body a");
        const productName = await productNameElement.getText();
      
        console.log(`Product ${i + 1}: ${productName}`);
        if(Products.includes(productName)) {
            const buttonAddToCart = await productCard.$(".card-footer button");
            await buttonAddToCart.click();
        }
      
        // if (productName === "Nokia Edge") {
        //   const buttonAddToCart = await productCard.$(".card-footer button");
        //   await buttonAddToCart.click();
        //   break; // Optional: stop loop once added
        // }


      }
    await $('.btn-primary').click()
    // await browser.pause(3000)
    // const checkProductPresence = $$('.media .media-body h4 a')
    
    // const checkResult = await (checkProductPresence.map(async(value)=>await value.getText()))
    // await browser.pause(3000)
    // await console.log(checkResult,'checks')
    // await chaiExpect(await Products).to.deep.equal(await checkResult)

    const productPrices = await $$('//tr/td[4]/strong')
    // const Total= await Promise.all(await productPrices.map(async(productPrice)=>parseInt((await productPrice.getText()).split('.').trim()))).reduce((acc,price)=>acc+price,0);
    const Total = await productPrices.map(async el => await el.getText())
    console.log(await Total,'Total Price')
    const TrimmedTotal = Total.split(".")
    console.log(await TrimmedTotal,'Total Price2')

   
   
    // await browser.pause(30000)
    // const productText = await checkProductPresence.getText()
    // chaiExpect(productText).to.deep.equal('Nokia Edge')
  });
});
