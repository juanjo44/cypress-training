import {StudentFormPage} from "../page";


describe("This test will fill a form", () => {
  // Arrange
  const personalInformation = {
    name: "Holmes",
    lastName: "Salazar",
    email: "test@email.com",
    gender: "Male",
    dateOfBirth: "27 Jul 2016",
    mobileNumber: "3656589156",
    hobbies: ["Music", "Reading"],
    currentAddress: "Av siempreViva # 123",
  };

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const stringDate = new Date(personalInformation.dateOfBirth);

  let studentFormPage: StudentFormPage;
  before(() => {
    studentFormPage = new StudentFormPage();
  });

  it("It Should fill the form", () => {
    studentFormPage.visStudentFormPage();

    // Act
    studentFormPage.fillForm(personalInformation);

    // Assert
    studentFormPage.getTitlePopUp()
        .should("have.text", "Thanks for submitting the form");

    studentFormPage.dataTable()
        .then((item) => {
          expect(item[0]).to.contain(`${personalInformation.name} ${personalInformation.lastName}`);
          expect(item[1]).to.contain(personalInformation.email);
          expect(item[2]).to.contain(personalInformation.gender);
          expect(item[3]).to.contain(personalInformation.mobileNumber);
          expect(item[4]).to
              .contain(`${stringDate.getDate()} ${month[stringDate.getMonth()]},${stringDate.getFullYear()}`);
          expect(item[6]).to.contain(`${personalInformation.hobbies.join(", ")}`);
          expect(item[8]).to.contain(personalInformation.currentAddress);
          expect(item[9]).to.contain("NCR Noida");
        });
  });
});
