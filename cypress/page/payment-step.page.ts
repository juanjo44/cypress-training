class PaymentStepPage {
  private bankWireOption: string;
  private order: string;
  private message: string;

  constructor () {
    this.bankWireOption = ".bankwire";
    this.order = "#cart_navigation > .button > span";
    this.message = ".cheque-indent > .dark";
  }

  public selecBankWireOption(): void{
    cy.get(this.bankWireOption).click();
  }

  public buyTShirt(): void {
    cy.get(this.order).click();
  }

  public getOrderMessage() {
    return cy.get(this.message);
  }
}

export { PaymentStepPage }
