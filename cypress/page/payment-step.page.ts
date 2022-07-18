class PaymentStepPage {
  private bankWireOption: string;
  private order: string;

  constructor () {
    this.bankWireOption = ".bankwire";
    this.order = "#cart_navigation > .button > span";
  }

  public selecBankWireOption(): void{
    cy.get(this.bankWireOption).click();
  }

  public buyTShirt(): void {
    cy.get(this.order).click();
  }
}

export { PaymentStepPage }