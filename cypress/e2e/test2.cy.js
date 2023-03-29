
describe('Тест форма логин пароль', function () {
    
    it('Флоу юзера', function () {
         cy.visit('https://testqastudio.me');
         cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
         cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
         cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
         cy.wait(5000);
         cy.get('.checkout').click();
         cy.get('#billing_first_name').type('Name');
         cy.get('#billing_last_name').type('Surname');
         cy.get('#billing_address_1').type('Улица Пушкина, Дом Колотушкина');
         cy.get('#billing_city').type('DefaultCity');
         cy.get('#billing_state').type('Far away');
         cy.get('#billing_postcode').type('777777');
         cy.get('#billing_phone').type('777777');
         cy.get('#billing_email').type('qwe@wowas.qa');
         cy.wait(5000);
         cy.get('#place_order').click()
         })
        
 })
 