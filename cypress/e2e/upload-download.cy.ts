import {DownloadPage, UploadPage} from "../page";


describe("This test will upload a file", () => {
  // Arrange
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;
  let fileName: string;

  before(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
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

  it("It will download a File", () => {
    // Arrange
    downloadPage.visitPage();

    // Act
    downloadPage.downloadImage();

    // Assert
    downloadPage.getFileDownloadName("sampleFile.jpeg")
        .should("exist");
  });
});
