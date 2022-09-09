import {
    Given, When, Then, And
} from "@badeball/cypress-cucumber-preprocessor";

import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

const pagIniSan = require("../../pages/po_pagina_santander.cy")
const simPres = require("../../pages/po_simulador_prestamos.cy")

Given("Entrar en pagina web santander pres", ()=>{
    cy.visit('https://www.bancosantander.es/particulares')
})

When("Click en apartado prestamos", ()=>{
    pagIniSan.clickApartadoPrestamos()
})

When("Click en calcula tu prestamo", ()=>{
    pagIniSan.clickSimulaPrestamo()
})

Then("Accede al iframe de cliente santander", ()=>{
    simPres.cargarIframePrestamos()
})

When("Se elige la opcion No soy cliente", ()=>{
    simPres.clickNoSoyCliente()
})

Then("Accede a la pagina de prestamos", ()=>{
    cy.visit('https://www.bancosantander.es/particulares/prestamos/simulador-prestamos-personales')
})

Then("Se comprueba el título del simulador de prestamos", ()=>{
    simPres.comprobarTituloPrestamo()
})

When("Se elige el tipo de prestamo de coche", ()=>{
    simPres.elegirPrestamoCoche()
})

When("Se escribe el {string} del prestamo", (dinero)=>{
    simPres.escribirDineroPrestamo(dinero)
})

When("Se escribe los {string} del prestamo", (meses)=>{
    simPres.escribirMesesPrestamo(meses)
})

When("Se elige el tipo de coche electrico", ()=>{
    simPres.elegirCocheElectrico()
})

Then("Se obtiene el resultado de la cuota mensuales", ()=>{
    simPres.almacenaResultadoCuotaMensual()
})

When("Se obtiene el informe final en PDF", ()=>{
simPres.obtenerInformePDF()
})

Then("Se descarga el informe final en PDF", ()=>{
    cy.downloadFile('https://www.bancosantander.es/wcm/connect/www.bancosantander.es24647/8b760c44-acd9-4d44-968a-674b56a46c87/Imagen+50%25+702x450.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_O1A0HJ82O0E160Q2H3HV972000-8b760c44-acd9-4d44-968a-674b56a46c87-nhfqSwCC','cypress/downloads', 'imagen.png')
    //cy.visit('https://simuladores.bancosantander.es/SantanderES/LoanReportWeb.aspx')
    //cy.downloadFile('https://simuladores.bancosantander.es/SantanderES/LoanReportWeb.aspx','cypress/downloads', 'cert.pdf')
    //cy.readFile('cypress/fixtures/Download/test.txt').should('contain', 'Lorem ipsum dolor sit amet')
    //cy.get('viewer-download-controls').find('cr-icon-button[id="download"]').click({force:true})
})