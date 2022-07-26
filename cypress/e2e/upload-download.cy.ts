import {UploadPage} from "../page";


describe("This test will upload a file", () => {
  // Arrange
  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage();
  });

  it("It will upload a file", () => {
    uploadPage.visitTestPage();

    // Act
    uploadPage.uploadFile("example.json");

    // Assert
    uploadPage.getTitle().should("have.text", "File Uploaded!");
  });
});
