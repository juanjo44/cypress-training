class UploadPage {
  private pageURL: string;
  private uploadInput: string;
  private submitButton: string;
  private headerMessage:string;
  private fileUploaded: string;

  constructor () {
    this.pageURL = "https://the-internet.herokuapp.com/upload";
    this.uploadInput = "#file-upload";
    this.submitButton = "#file-submit";
    this.headerMessage = ".example > h3"
    this.fileUploaded = "#uploaded-files"

  }

  public visitTestPage () {
    cy.visit(this.pageURL);
  }

  public uploadFile (fileName: string) {
    cy.get(this.uploadInput).attachFile(fileName);
    cy.get(this.submitButton).click()
  }

  public getConfirmation () {
    return cy.get(this.headerMessage)
  }

  public getFileName () {
    return cy.get(this.fileUploaded);
  }
}

export { UploadPage }
