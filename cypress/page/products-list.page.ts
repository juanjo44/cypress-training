class ProductsListPage {
  private addToCartButton: string;
  private checkout: string;

  constructor (){
    this.addToCartButton = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    this.checkout = "[style*='display: block;'] .button-container > a";
  }

  public addToCart(): void {
    cy.get(this.addToCartButton).click();
  }

  public goToShoppingCart(): void {
    cy.get(this.checkout).click();
  }
}

export { ProductsListPage }
