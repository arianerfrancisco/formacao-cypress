Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').clear().type(nome);
    cy.get('input[formcontrolname="password"]').clear().type(senha, {log:false});
    cy.get('button[type="submit"]').click();
})