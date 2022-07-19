class ShippingStepPage {
    private terms: string;
    private checkoutShipping: string;
    constructor () {
        this.terms = "#cgv"
        this.checkoutShipping = ".cart_navigation > .button > span";
    }

    public acceptTerms(): void {
        cy.get(this.terms).click();
    }

    public goToPayment(): void {
        cy.get(this.checkoutShipping).click();
    }
}

export {ShippingStepPage}
