describe('Testes da página de cadastro', () => {

  it('Deve cadastrar as senhas iguais', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html');

    cy.get('#nome').type('Usuário Teste');
    cy.get('#email').type('teste@teste.com');
    cy.get('#senha').type('123456');
    cy.get('#csenha').type('123456');
    cy.get('#entrar').click();

    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Foi');
    });
  });

  it('Deve mostrar erro se as senhas forem diferentes', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html');

    cy.get('#nome').type('Usuário Teste');
    cy.get('#email').type('teste@teste.com');
    cy.get('#senha').type('123456');
    cy.get('#csenha').type('654321');
    cy.get('#entrar').click();

    cy.get('#erro').should('be.visible');
  });

  it('Deve mostrar erro se tiver alguma caixa vazia', () => {
    cy.visit('http://127.0.0.1:5500/cadastro.html');

    cy.get('#entrar').click();

    cy.get('input:invalid').should('have.length', 4);
  });

});
