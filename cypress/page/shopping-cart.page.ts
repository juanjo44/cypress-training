class ShoppingCartPage {
  private checkoutShoppingCart: string

  constructor () {
    this.checkoutShoppingCart = ".cart_navigation a[title='Proceed to checkout']";
  }

  public goToLogin(): void {
    cy.get(this.checkoutShoppingCart).click();
  }
}
export { ShoppingCartPage }
