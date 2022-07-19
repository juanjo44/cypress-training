class AddressStepPage {
    private checkOutAddress: string;

    constructor () {
        this.checkOutAddress = "button[name='processAddress']";
    }

    public goToShipping(): void {
        cy.get(this.checkOutAddress).click();
    }
}

export {AddressStepPage}
