class UploadPage {
  private pageURL: string;
  private uploadInput: string;
  private submitButton: string;
  private headerMessage:string;

  constructor () {
    this.pageURL = "https://the-internet.herokuapp.com/upload";
    this.uploadInput = "#file-upload";
    this.submitButton = "#file-submit";
    this.headerMessage = ".example > h3"

  }

  public visitTestPage () {
    cy.visit(this.pageURL);
  }

  public uploadFile (fileName: string) {
    cy.get(this.uploadInput).attachFile(fileName);
    cy.get(this.submitButton).click()
  }

  public getTitle () {
    return cy.get(this.headerMessage)
  }
}

export { UploadPage }
