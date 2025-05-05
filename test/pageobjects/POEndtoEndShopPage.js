class Shop{
    get Cards() {
        return $$(".card.h-100")
    }
    async AddProductsToCart(products) {
        const cardsM = await this.Cards;
        for (const productCard of cardsM) {
            const productNameElement = await productCard.$(".card-body .card-title a");
            const productName = await productNameElement.getText();
            console.log(`Found product: ${productName}`);
            
            if (products.includes(productName)) {
              const buttonAddTo = await productCard.$(".card-footer button");
              await buttonAddTo.waitForClickable({ timeout: 5000 });
              console.log(await productName,'t5t5')
              await buttonAddTo.click();
              
            }
          }
    }
}

module.exports = new Shop()