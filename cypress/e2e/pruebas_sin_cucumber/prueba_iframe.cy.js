/// <reference types="cypress" />

describe('prueba iframes santander', ()=>{


    it.skip('prueba1 - ejemplo facil', ()=>{
        cy.visit('http://the-internet.herokuapp.com/iframe')
        //cy.get('iframe[id="mce_0_ifr"]').should('exist')
        //cy.get('iframe[id="mce_0_ifr"]').clear().type('hola')

        /*
        const iframe_prueba = cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap)
        iframe_prueba.clear().type('hola')
        */

       cy.frameLoaded() //comprobar que se ha cargado un iframe
       cy.get('#mce_0_ifr').iframe().clear().type('hola') //realizar acciones dentro del iframe

    })

    it.skip('prueba2 - simulador hipoteca', ()=>{

        cy.visit('https://www.bancosantander.es/particulares')
        cy.get('[title="HIPOTECAS"]').click()
        //cy.frameLoaded('iframe[name="iframe_modal"]')
        cy.get('iframe[name="iframe_modal"]').iframe().should('exist')
        cy.get('[class=" s_btn btn-s-rojo-positivo"]').contains('CALCULA TU HIPOTECA').click()
        //cy.window()

        cy.visit('https://www.bancosantander.es/particulares/hipotecas/simulador-hipoteca')
        cy.frameLoaded('iframe#iFrameResizer0').then(()=>{
            cy.get('iframe#iFrameResizer0').iframe().contains('Calcula la cuota de tu nueva hipoteca').should('exist')
            cy.get('iframe#iFrameResizer0').iframe().find('input[id="input_SIMULATION.SLIDER_TITLE"]').clear().type('350000')
            cy.get('iframe#iFrameResizer0').iframe().find('button[id="radio_button_SIMULATION.MORTGAGE_TYPE0"]').click()
            cy.get('iframe#iFrameResizer0').iframe().find('button[id="radio_button_SIMULATION.HOME_STATUS0"]').click()
            cy.get('iframe#iFrameResizer0').iframe().find('button[id="radio_button_SIMULATION.MORE_THAN_ONE_HOLDER0"]').click()
            cy.get('iframe#iFrameResizer0').iframe().find('input[id="currency_input_SIMULATION.TOTAL_INCOME"]').clear().type('5000')
            cy.get('iframe#iFrameResizer0').iframe().find('input[id="currency_input_SIMULATION.ANOTHER_QUOTAS"]').clear().type('500')
            cy.get('iframe#iFrameResizer0').iframe().find('input[id="date_picker_SIMULATION.BIRTH_DATE"]').click()
            cy.get('iframe#iFrameResizer0').iframe().find('bs-calendar-layout').find('td[role="gridcell"][class="ng-star-inserted"]').contains('6').click()
            cy.get('iframe#iFrameResizer0').iframe().find('ng-select').find('input').click()
            cy.get('iframe#iFrameResizer0').iframe().find('ng-dropdown-panel').contains('Extremadura').click()
            cy.get('iframe#iFrameResizer0').iframe().find('button[id="button_CALCULA TU CUOTA"]').click()
            })

    })

    it.skip('prueba3 - simulador préstamos', ()=>{

        cy.visit('https://www.bancosantander.es/particulares')
        cy.get('[title="PRÉSTAMOS  Y RENTING"]').click()
        cy.get('#120').contains('SIMULA TU PRÉSTAMO PERSONAL').click()
        cy.frameLoaded('iframe[data-id="120"]')
        cy.get('iframe[data-id="120"]').iframe().find('section').contains('¿Eres cliente Santander?').should('exist')
        cy.get('iframe[data-id="120"]').iframe().find('[target="_blank"]').contains('No soy cliente').click()

        cy.visit('https://www.bancosantander.es/particulares/prestamos/simulador-prestamos-personales')
        cy.get('[data-id="tab_5882120c-597d-409a-994f-383f51f1941a"]').contains('Calcula tu cuota con el Simulador de Préstamos Personales').should('exist')
        cy.frameLoaded('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca')
        cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('[ng-click="SelectLoan(loan)"]').contains('Coche').click()
        cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('input#amount').clear().type('50000')
        cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('input#term').clear().type('75')
        cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('#electricVehicle').find('[ng-click="switch()"]').contains('Sí').click({force:true})

        cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('[class="res r1"]').find('[ng-if="!ShowMoreInstallments() && getCarencyMonths() == 0"]').then(($ej1)=>{
            const c_mensual = $ej1.text()
            cy.log(c_mensual)
            cy.wait(1500).then(()=>{
                cy.screenshot('pruebas_sin_cucumber/resultado_prestamos_iframes',{ capture:'runner' }, {overwrite:true})
            })
        })

        cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('[ng-click="GetPDF()"]').contains('Descarga tu informe en PDF').click()
        cy.get('[href="/particulares"][aria-label="Banco Santander"]').click()

    })

    it.skip('prueba4', ()=>{
        cy.visit('https://www.bancosantander.es/particulares')
        cy.get('#navegacion-home').find('p[class="titulo"]').then(($btn) =>{
            const tit = $btn.text()
            cy.log(tit)
            expect(tit).to.equal('Cuéntanos, ¿qué necesitas?')
            cy.wait(1500).then(()=>{
                cy.screenshot('imprimir_texto',{ capture:'runner' }, {overwrite:true})
            })
        })
    })

    it('prueba downloadFile', ()=>{
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt','cypress/fixtures/Download', 'test.txt')
        cy.readFile('cypress/fixtures/Download/test.txt').should('contain', 'Lorem ipsum dolor sit amet')
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','Downloads','cypress-example.jpg')
        cy.readFile("./Downloads/cypress-example.jpg")
    })

    const filePath = 'cypress/fixtures/probar.docx'
    const palabra = 'hola esto es una prueba'
    const captura = 'cypress/screenshots/simulador_prestamos.feature/dinero_prestamo.png'

    it('prueba escribir y leer en un docx', ()=>{
        cy.writeFile(filePath,captura)
    })
})