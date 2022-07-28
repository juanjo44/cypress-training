class IFramePage {
  private pageURL: string;
  private pageIframe: string;
  private pageCssURL: string;

  constructor () {
    this.pageURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.pageIframe = "iframe[title='W3Schools HTML Tutorial']";
    this.pageCssURL = "https://www.w3schools.com/css/default.asp";
  }

  public visit () {
    cy.visit(this.pageURL)
  }

  public getFrameTitle () {
    return cy.iframe(this.pageIframe).find('h1')
  }

  public goToCssPageInFrame () {
    cy.iframe(this.pageIframe).find("a[title='CSS Tutorial']").click();
    cy.frameLoaded(this.pageIframe, {url: this.pageCssURL })
  }

}

export { IFramePage }
