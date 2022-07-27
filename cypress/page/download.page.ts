class DownloadPage {
  private pageURL: string;
  private downloadButton: string;

  constructor () {
    this.pageURL = "https://demoqa.com/upload-download";
    this.downloadButton = "#downloadButton";
  }

  public visitPage () {
    cy.visit(this.pageURL)
  }

  public downloadImage () {
    cy.get(this.downloadButton).click();
  }

  public getFileDownloadName(fileName: string) {
    return cy.readFile(`cypress/Downloads/${fileName}`);
  }
}

export { DownloadPage }
