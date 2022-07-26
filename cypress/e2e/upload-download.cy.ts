import {UploadPage} from "../page";


describe("This test will upload a file", () => {
  // Arrange
  let uploadPage: UploadPage;
  let fileName: string;

  before(() => {
    uploadPage = new UploadPage();
    fileName = "example.json";
  });

  it("It will upload a file", () => {
    uploadPage.visitTestPage();

    // Act
    uploadPage.uploadFile(fileName);

    // Assert
    uploadPage.getConfirmation().should("have.text", "File Uploaded!");
    uploadPage.getFileName().should("contain", fileName);
  });
});
