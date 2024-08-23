describe('template spec', () => {
  var name = 'Arthur Abitante';
  var phone = '49999498590'
  it('passes', () => {
    cy.visit('/teste.html')
  
    cy.log('Pagina inicial visitada')

    cy.get('title').contains('DWV - Mensagem enviada por cliente via hotsite')
    cy.log('Verificado titulo')


    cy.get('[alt=""]').should('be.visible').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
    cy.log('Verificado tamanho de imagem primaria')


    cy.get('[alt="dwv"]').should('be.visible').and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
    cy.log('Verificado tamanho de imagem do link')


    cy.get('[style*="color: #585858"]').should('have.text', '\n                                Mensagem enviada por cliente via hotsite DWV\n                            ')
    cy.get('[style*="color: #FF0000"]').should('have.text', '\n                                Responda para o e-mail indicado no formulário abaixo.\n                            ')
    cy.log('Verificado os textos descritivos da página')


    cy.get(`label[for="name"]`).should('have.text', 'Nome:');
    cy.get(`label[for="phone"]`).should('have.text', 'Telefone:');
    cy.log('Verificado os textos dos labels dos campos da página')


    cy.get('input#name').should('be.visible')
    cy.get("input#name").then($field => {
      if($field.is(':visible')){
        cy.get("input#name").type(name);
      }
    })
    cy.log('Verificado se campo nome está visivel e insere um valor de nome')


    cy.get('input#name').invoke('val').should('equal', name)
    cy.log('Checado se o valor do nome inserido é o mesmo que está presente no campo')


    cy.get('input#phone').should('be.visible')
    cy.get("input#phone").then($field => {
      if($field.is(':visible')){
        cy.get("input#phone").type(phone);
      }
    })
    cy.log('Verificado se campo nome está visivel e insere um valor de telefone')

    cy.get('input#phone').invoke('val').should('equal', phone)
    cy.log('Checado se o valor de telefone inserido é o mesmo que está presente no campo')

    cy.get('form').should('be.visible')
    cy.get('form').submit()

    cy.log('Verificado se o formulário está visível e executa o submit')


    cy.get("input#name").should('be.empty');
    cy.get("input#phone").should('be.empty');

    cy.get("input#name").should('be.visible');
    cy.get("input#phone").should('be.visible');

    cy.log('Verificado se os campos nome e telefone estão vazios e visíveis')


    cy.get("a").should("have.attr", "href", "https://dwvapp.com.br");
    cy.get('[alt="dwv"]').should('be.visible');
    cy.log('Verificado se a imagem para o link está visível e se está redirecionando para o local devido')

    cy.get('[alt="dwv"]').click();
    cy.log('Clicado na ancora/link para ser redirecionado para a pagina desejada')

    cy.wait(10000);
    cy.log('Esperado 10 segundos para carregar a página desejada totalmente')


    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.log('Verificado se houve algum erro não esperado, caso sim, ele irá continuar o teste')
    //esse problema precisou ser corrigido devido a proteção de Cross origin do site

   cy.origin('https://site.dwvapp.com.br/', () => {
      cy.url().should('eq', 'https://site.dwvapp.com.br/');
      cy.log('Verificado se a url é a mesma desejada')

      cy.document().its('readyState').should('eq', 'complete');
      cy.log('Verificado se a página foi carregada completamente')
    });

  })
})

