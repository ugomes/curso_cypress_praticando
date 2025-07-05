import { faker } from '@faker-js/faker';
import login_page from "../support/pages/login_page";
import base_page from "../support/pages/base_page";

describe('Login', () => {

    beforeEach('Acessar página de login', () => {
        base_page.acessarLoginUsuario()
    });
    it('Login Com Sucesso', () => {
        const email = faker.internet.email();
        login_page.preencher_campo_email(base_page, email);
        login_page.preencher_campo_senha(base_page, faker.internet.password());
        login_page.clicar_botao_login(base_page);
        cy.get('#swal2-title').should('be.visible')
            .and('have.text', 'Login realizado')
            .get('#swal2-html-container').should('be.visible')
            .and('have.text', `Olá, ${email}`);
       
    })

    it('Login Falha - Todos os campos em branco', () => {
        login_page.clicar_botao_login(base_page);
        cy.get('.invalid_input').should('be.visible')
            .and('have.text', 'E-mail inválido.')
            
    })

    it('Login Falha - Campo Senha em branco', () => {
        login_page.preencher_campo_email(base_page, faker.internet.email());
        login_page.clicar_botao_login(base_page);
        cy.get('.invalid_input').should('be.visible')
            .and('have.text', 'Senha inválida.')
    })

    it('Login Falha - Campo Email em branco', () => {
        login_page.preencher_campo_senha(base_page, faker.internet.password());
        login_page.clicar_botao_login(base_page);
        cy.get('.invalid_input').should('be.visible')
            .and('have.text', 'E-mail inválido.')

    })
})