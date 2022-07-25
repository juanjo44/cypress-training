import { contains } from "cypress/types/jquery";

class StudentFormPage {
  private studentFormURL: string;
  private studentForm: string;
  
  constructor() {
    this.studentFormURL = "https://demoqa.com/automation-practice-form";
    this.studentForm = "#userForm"
  }

  public visStudentFormPage () {
    cy.visit(this.studentFormURL);
  }

  public fillForm(userInformation: {
    name: any;
    lastName: any;
    email: string;
    gender: string;
    dateOfBirth: string;
    mobileNumber: string;
    hobbies: string[];
    currentAddress: string;
    })
    {
    cy.get("#firstName").type(userInformation.name);
    cy.get("#lastName").type(userInformation.lastName);
    cy.get("#userEmail").type(userInformation.email);
    cy.get("#genterWrapper").find(`input[value='${userInformation.gender}']`).check({force: true});
    cy.get("#userNumber").type(userInformation.mobileNumber);
    // cy.get("#dateOfBirthInput").type(`{selectAll}${userInformation.dateOfBirth}{enter}`);
    this.pickDate(new Date(userInformation.dateOfBirth));
    userInformation.hobbies.forEach((hobbie) => {
      cy.get("#hobbiesWrapper").find(".custom-control-label").filter(`:contains("${hobbie}")`).click();
    })
    cy.get("#currentAddress").type(userInformation.currentAddress);
    cy.get("#react-select-3-input").type("NCR{enter}",{force:true});
    cy.get("#react-select-4-input").type("Noida{enter}", {force:true});
    cy.get("#submit").click({force:true});
    cy.get("#close-fixedban").click();
  }

  public getTitlePopUp(){
    return cy.get("#example-modal-sizes-title-lg");
  }

  public dataTable(){
    return cy.get("tbody > tr > td:nth-child(2)");
  }

  private pickDate (date: Date) {
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select(date.getMonth());
    cy.get(".react-datepicker__year-select").select(`${date.getFullYear()}`);
    cy.get(".react-datepicker__day").filter(`:contains("${date.getDate()}")`).not(".react-datepicker__day--outside-month").click();
  }

}

export {StudentFormPage}
