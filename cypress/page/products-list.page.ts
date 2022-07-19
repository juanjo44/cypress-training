class ProductsListPage {
  private addToCartButton: string;
  private checkout: string;

  constructor (){
    this.addToCartButton = ".ajax_add_to_cart_button > span";
    this.checkout = ".button-container > .button-medium > span";
  }

  public addToCart(): void {
    cy.get(this.addToCartButton).click();
  }

  public goToShoppingCart(): void {
    cy.get(this.checkout).click();
  }
}

export { ProductsListPage }
