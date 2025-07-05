import base_page from '../support/pages/base_page'
import cadastroPage from '../support/pages/cadastro_page'

describe.only('Cadastro de Usuario', () => {

    beforeEach(() => {
        base_page.acessarCadastroUsuario()
    })

    it('Cadastro Com Sucesso', () => {
        cadastroPage.preencher_campo_nome(base_page)
        cadastroPage.preencher_campo_email(base_page)
        cadastroPage.preencher_campo_senha(base_page)
        cadastroPage.clicar_botao_cadastrar(base_page)
        cy.get('#swal2-title').should('be.visible')
            .and ('have.text', 'Cadastro realizado!')
       
    })

    it('Cadastro Com Falha - Nome vazio', () => {
        cadastroPage.clicar_botao_cadastrar(base_page)
        cy.get('#errorMessageFirstName').should('be.visible')
            .and ('have.text', 'O campo nome deve ser prenchido')

        
       
    })

    it('Cadastro Com Falha - Email vazio', () => {
        cadastroPage.preencher_campo_nome(base_page)
        cadastroPage.preencher_campo_senha(base_page)
        cadastroPage.clicar_botao_cadastrar(base_page)
        cy.get('#errorMessageFirstName').should('be.visible')
            .and ('have.text', 'O campo e-mail deve ser prenchido corretamente')
       
    })

    it('Cadastro Com Falha - Email invalido', () => {
        cadastroPage.preencher_campo_nome(base_page)
        cadastroPage.preencher_campo_senha(base_page)
        cadastroPage.preencher_campo_email_invalido(base_page)
        cadastroPage.clicar_botao_cadastrar(base_page)
        cy.get('#errorMessageFirstName').should('be.visible')
            .and ('have.text', 'O campo e-mail deve ser prenchido corretamente')
       
    })

    it('Cadastro Com Falha - Senha vazia', () => {
        cadastroPage.preencher_campo_nome(base_page)
        cadastroPage.preencher_campo_email(base_page)
        cadastroPage.clicar_botao_cadastrar(base_page)
        cy.get('#errorMessageFirstName').should('be.visible')
            .and ('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro Com Falha - Senha menor que 6 caracteres', () => {
        cadastroPage.preencher_campo_nome(base_page)
        cadastroPage.preencher_campo_email(base_page)
        cadastroPage.preencher_campo_senha_menor_6(base_page)
        cadastroPage.clicar_botao_cadastrar(base_page)
        cy.get('#errorMessageFirstName').should('be.visible')
            .and ('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
       
    })

   
})