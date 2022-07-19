class ProductsListPage {
  private addToCartButton: string;
  private checkout: string;

  constructor (){
    this.addToCartButton = "a[title='Add to cart']";
    this.checkout = "Proceed to checkout";
  }

  public addToCart(): void {
    cy.get(this.addToCartButton).click();
  }

  public goToShoppingCart(): void {
    cy.contains(this.checkout).click();
  }
}

export { ProductsListPage }
