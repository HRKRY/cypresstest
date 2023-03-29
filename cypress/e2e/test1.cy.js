
describe('Тест форма логин пароль', function () {
    
   it('Позитивный тест-кейс логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
        })

    it('Восстановление пароля', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
        })
    
    it('Негативный тест-кейс логин тру,пасс инкорект', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        })

    it('Негативный тест-кейс логин инкорект,пасс тру', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('german1@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        })
    
    it('Негативный тест-кейс валидация без @', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio2');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        })

    it('Приведение к строчным буквам в логине', function () {
        cy.reload();
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('gerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
        })        
    
})
