class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string
    private dressesMenu: string;

    constructor() {
        this.tShirtMenu = "#block_top_menu > ul > li > a[title='T-shirts']";
        this.dressesMenu = "#block_top_menu > ul > li > a[title='Dresses']";
        this.menuContentPageURL = "http://automationpractice.com/";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }

    public goToDressMenu(): void {
        cy.get(this.dressesMenu).click();
    }
}

export { MenuContentPage }
