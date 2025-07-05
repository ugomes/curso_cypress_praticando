
export default {
    preencher_campo_email(base_page, email) {
        base_page.preencher_campo('#user', email)
    },
    preencher_campo_senha(base_page, senha) {
        base_page.preencher_campo('#password', senha)
    },
    clicar_botao_login(base_page) {
        base_page.clicar_elemento('#btnLogin')
    }
}