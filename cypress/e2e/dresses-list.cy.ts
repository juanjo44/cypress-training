import {MenuContentPage, DressesListPage} from "../page";

describe("the user navigates to the dresses page should", () => {
  // Arrange
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const allDressesName = [
    "Printed Dress",
    "Printed Dress",
    "Printed Summer Dress",
    "Printed Summer Dress",
    "Printed Chiffon Dress"
  ];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("shows the available dresses", () =>{
    // Arrange
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToDressMenu();
    dressesListPage.getDressProduct();

    // Assert
    dressesListPage.validateItemsNumber(allDressesName.length);
    dressesListPage.validateItemsNames(allDressesName);
  });
});
