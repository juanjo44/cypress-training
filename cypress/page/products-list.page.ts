class ProductsListPage {
  private addToCartButton: string;
  private checkout: string;
  private allProducts: string;

  constructor (){
    this.addToCartButton = "a[title='Add to cart']";
    this.checkout = "Proceed to checkout";
    this.allProducts = ".product_list";
  }

  public addToCart(productName:string): void {
    this.findProductByName(productName).find(this.addToCartButton).click();
  }

  public goToShoppingCart(): void {
    cy.contains(this.checkout).click();
  }

  public findProductByName(productName:string){
    return cy.get(this.allProducts).filter(`:contains(${productName})`);
  }
}

export { ProductsListPage }
