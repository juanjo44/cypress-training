class LoginPage {
  private emailSelector: string;
  private passwordSelector: string;
  private signIn: string;

  constructor () {
    this.emailSelector = "#email";
    this.passwordSelector = "#passwd";
    this.signIn = "#SubmitLogin > span";
  }

  public login(email:string, password:string){
    cy.get(this.emailSelector).type(email);
    cy.get(this.passwordSelector).type(password);
    cy.get(this.signIn).click();
  }
}

export {LoginPage}
