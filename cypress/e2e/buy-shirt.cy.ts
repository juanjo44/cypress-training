import {AddressStepPage, LoginPage, MenuContentPage, PaymentStepPage} from "../page/index";
import {ProductsListPage, ShippingStepPage, ShoppingCartPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addToCart();
    productsListPage.goToShoppingCart();

    shoppingCartPage.goToLogin();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.goToShipping();

    shippingStepPage.acceptTerms();
    shippingStepPage.goToPayment();

    paymentStepPage.selecBankWireOption();
    paymentStepPage.buyTShirt();

    paymentStepPage.getOrderMessage().should("have.text", "Your order on My Store is complete.");
  });
});
