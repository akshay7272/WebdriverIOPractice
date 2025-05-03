class ReviewPage {
    get Products() {
        return $$("//tr/td[4]/strong")
    }
    get Total() {
        return $("td[class='text-right'] h3 strong")
    }

   async cartTotal(){

    let totalPrice = 0;
    let productsValues =  await this.Products
    // await productsValues.waitForExist({timeout:5000})
    for (const element of await productsValues) {
      const eleText = await element.getText(); 
      const cleaned = await eleText.replace(/[^\d]/g, "");
      const numericValue = parseInt(cleaned, 10);
      totalPrice += numericValue;
    }
      return totalPrice;
   }

   async finalOutcome() {
    const FinalOutcome =  await this.Total
    await FinalOutcome.waitForExist({ timeout: 5000 });
    const finalText = await FinalOutcome.getText();
    const cleaned2 = finalText.replace(/[^\d]/g, "");
    const numericValue2 = parseInt(cleaned2, 10);
    const totalPrices = await this.cartTotal();
    console.log(`Calculated total: ${totalPrices}, Displayed total: ${numericValue2}`);
    return { totalPrices, numericValue2 };
   }
}

module.exports = new ReviewPage()