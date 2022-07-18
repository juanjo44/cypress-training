class LoginPage {
  private emailSelector: string;
  private emailUser: string;
  private passwordSelector: string;
  private passwordUser: string;
  private signIn: string;

  constructor () {
    this.emailSelector = "#email";
    this.emailUser = "aperdomobo@gmail.com";
    this.passwordSelector = "#passwd";
    this.passwordUser = "WorkshopProtractor";
    this.signIn = "#SubmitLogin > span";
  }

  public typeEmail(): void{
    cy.get(this.emailSelector).type(this.emailUser)
  }

  public typePassword(): void {
    cy.get(this.passwordSelector).type(this.passwordUser)
  }

  public goToAddress(): void {
    cy.get(this.signIn).click()
  }
}

export {LoginPage}
