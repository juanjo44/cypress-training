import {StudentFormPage, PersonalInformation} from "../page";


describe("This test will fill a form", () => {
  // Arrange


  let studentFormPage: StudentFormPage;
  let personalInformation:PersonalInformation;

  before(() => {
    studentFormPage = new StudentFormPage();
    personalInformation = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "27 Jul 2016",
      mobileNumber: "3656589156",
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
      state: "NCR",
      city: "Noida",
    };
  });

  it("It Should fill the form", () => {
    const stringDate = new Date(personalInformation.dateOfBirth);
    const day = stringDate.getDate();
    const month = stringDate.toLocaleString("default", {month: "long"});
    const year = stringDate.getFullYear();

    studentFormPage.visStudentFormPage();

    // Act
    studentFormPage.fillForm(personalInformation);

    // Assert
    studentFormPage.getModalContent()
        .should("contain", "Thanks for submitting the form");

    studentFormPage.getModalContent()
        .should("contain", `${personalInformation.name} ${personalInformation.lastName}`);
    studentFormPage.getModalContent()
        .should("contain", personalInformation.email);
    studentFormPage.getModalContent()
        .should("contain", personalInformation.gender);
    studentFormPage.getModalContent()
        .should("contain", personalInformation.mobileNumber);
    studentFormPage.getModalContent()
        .should("contain", `${day} ${month},${year}`);
    studentFormPage.getModalContent()
        .should("contain", `${personalInformation.hobbies.join(", ")}`);
    studentFormPage.getModalContent()
        .should("contain", personalInformation.currentAddress);
    studentFormPage.getModalContent()
        .should("contain", `${personalInformation.state} ${personalInformation.city}`);
  });
});
