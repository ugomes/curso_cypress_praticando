import { faker } from '@faker-js/faker'

export default {
    clicar_botao_cadastrar(base_page) {
        base_page.clicar_elemento('#btnRegister')
    },
    preencher_campo_nome(base_page) {
        base_page.preencher_campo('#user', faker.name.firstName())
    },
    preencher_campo_email(base_page) {
        base_page.preencher_campo('#email', faker.internet.email())
    },
 
    preencher_campo_senha(base_page) {
        base_page.preencher_campo('#password', faker.internet.password())
    },
    preencher_campo_email_invalido(base_page) {
        base_page.preencher_campo('#email', 'usuario@'); 
    },
    preencher_campo_senha_menor_6(base_page) {
        base_page.preencher_campo('#password', '12345')
    }
}
