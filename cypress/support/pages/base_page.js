export default  {
    acessarCadastroUsuario() {
        cy.visit('/register')
          .get('#top_header')
    },
    clicar_elemento(elemento) {
        cy.get(elemento)
          .click()
    },
    preencher_campo(elemento, valor) {
        cy.get(elemento)
          .type(valor)
    },

    acessarLoginUsuario() {
        cy.visit('/login')
          
    }
}