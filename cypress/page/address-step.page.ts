class AddressStepPage {
    private checkOutAddress: string;

    constructor () {
        this.checkOutAddress = ".cart_navigation > .button > span";
    }

    public goToShipping(): void {
        cy.get(this.checkOutAddress).click();
    }
}

export {AddressStepPage}