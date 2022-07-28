import {IFramePage} from "../page";


describe("This will check the iframe", () => {
  // Arrange
  let iframePage: IFramePage;

  beforeEach(() => {
    iframePage = new IFramePage();
    iframePage.visit();
  });

  it("It will verify HTML iFram title", () => {
    iframePage.getFrameTitle().should("contain.text", "HTML Tutorial");
  });

  it("It will verify CSS iframe", () => {
    // Act
    iframePage.goToCssPageInFrame();

    // Assert
    iframePage.getFrameTitle().should("contain.text", "CSS Tutorial");
  });
});
