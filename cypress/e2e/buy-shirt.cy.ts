import {AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage} from "../page/index";
import {ProductsListPage, ShippingStepPage, ShoppingCartPage} from "../page/index";


describe("Buy a t-shirt", () => {
  let menuContentPage:MenuContentPage;
  let productsListPage:ProductsListPage;
  let shoppingCartPage:ShoppingCartPage;
  let loginPage:LoginPage;
  let addressStepPage:AddressStepPage;
  let shippingStepPage:ShippingStepPage;
  let paymentStepPage:PaymentStepPage;

  // Arrange
  before(() =>{
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();

    // Act
    menuContentPage.goToTShirtMenu();

    productsListPage.addToCart("Faded Short Sleeve T-shirts");
    productsListPage.goToShoppingCart();

    shoppingCartPage.goToLogin();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.goToShipping();

    shippingStepPage.acceptTerms();
    shippingStepPage.goToPayment();

    paymentStepPage.selecBankWireOption();
    paymentStepPage.buyTShirt();

    // Assert
    paymentStepPage.getOrderMessage()
        .should("have.text", "Your order on My Store is complete.");
  });
});
