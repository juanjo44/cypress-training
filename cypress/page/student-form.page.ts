class StudentFormPage {
  private studentFormURL: string;
  private nameInput:string;
  private lastNameInput: string;
  private emailInput: string;
  private genderCheck: string;
  private numberInput: string;
  private hobbiesCheck: string;
  private addressInput: string;
  private stateSelect: string;
  private citySelct: string;
  private submitButton: string;
  private modalContent: string;
  private dateInput: string;
  private monthSelect: string;
  private yearSelect: string;
  private dayOption: string;
  
  constructor() {
    this.studentFormURL = "https://demoqa.com/automation-practice-form";
    this.nameInput = "#firstName";
    this.lastNameInput = "#lastName"
    this.emailInput = "#userEmail";
    this.genderCheck = "#genterWrapper";
    this.numberInput = "#userNumber";
    this.hobbiesCheck = "#hobbiesWrapper";
    this.addressInput = "#currentAddress";
    this.stateSelect ="#react-select-3-input";
    this.citySelct = "#react-select-4-input";
    this.submitButton = "#submit";
    this.modalContent = ".modal-content";
    this.dateInput = "#dateOfBirthInput";
    this.monthSelect = ".react-datepicker__month-select";
    this.yearSelect = ".react-datepicker__year-select";
    this.dayOption = ".react-datepicker__day";
  }

  public visStudentFormPage () {
    cy.visit(this.studentFormURL);
  }

  public fillForm(userInformation: PersonalInformation)
    {
    
    cy.get(this.nameInput).type(userInformation.name);
    cy.get(this.lastNameInput).type(userInformation.lastName);
    cy.get(this.emailInput).type(userInformation.email);
    cy.get(this.genderCheck).find(`input[value='${userInformation.gender}']`).check({force: true});
    cy.get(this.numberInput).type(userInformation.mobileNumber);
    // cy.get("#dateOfBirthInput").type(`{selectAll}${userInformation.dateOfBirth}{enter}`);
    this.pickDate(new Date(userInformation.dateOfBirth));
    userInformation.hobbies.forEach((hobbie) => {
      cy.get(this.hobbiesCheck).find(".custom-control-label").filter(`:contains("${hobbie}")`).click();
    })
    cy.get(this.addressInput).type(userInformation.currentAddress);
    cy.get(this.stateSelect).type(`${userInformation.state}{enter}`,{force:true});
    cy.get(this.citySelct).type(`${userInformation.city}{enter}`, {force:true});
    cy.get(this.submitButton).click({force:true});
    // cy.get("#close-fixedban").click();
  }

  public getModalContent(){
    return cy.get(this.modalContent);
  }

  private pickDate (date: Date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    cy.get(this.dateInput).click();
    cy.get(this.monthSelect).select(month);
    cy.get(this.yearSelect).select(`${year}`);
    cy.get(this.dayOption).filter(`:contains("${day}")`).not(".react-datepicker__day--outside-month").click();
  }

}

interface PersonalInformation {
  name: string,
  lastName: string,
  email: string,
  gender: string,
  dateOfBirth: string,
  mobileNumber:string,
  hobbies: string[],
  currentAddress: string,
  state: string,
  city: string,
}

export {StudentFormPage, PersonalInformation}
