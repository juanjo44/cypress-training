class ShoppingCartPage {
  private checkoutShoppingCart: string

  constructor () {
    this.checkoutShoppingCart = ".cart_navigation span";
  }

  public goToLogin(): void {
    cy.get(this.checkoutShoppingCart).click();
  }
}
export { ShoppingCartPage }