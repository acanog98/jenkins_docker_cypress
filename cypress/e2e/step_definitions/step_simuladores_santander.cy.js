import {
    Given, When, Then, And
} from "@badeball/cypress-cucumber-preprocessor";

import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

const pagIniSan = require("../../pages/po_pagina_santander.cy")
const simHip = require("../../pages/po_simulador_hipoteca.cy")
const simInv = require("../../pages/po_simulador_inversiones.cy")

/*
After(()=>{
    cy.screenshot('simuladores_santander.feature/resultado_final',{ capture:'runner' }, {overwrite:true})
})
*/

After({ tags:"@sim_hipotecas"}, function(){
    cy.wait(2000).then(()=>{
        cy.screenshot('resultado_hipoteca',{ capture:'runner' }, {overwrite:true})
    })
})

After({ tags:"@sim_inversiones"}, function(){
    cy.wait(2000).then(()=>{
        //cy.screenshot('resultado_inversion',{ capture:'runner' }, {overwrite:true})
        cy.screenshot('cypress/fixtures/probar.docx/resultado_inversion',{ capture:'runner' }, {overwrite:true})
    })
})

Given("Entrar en pagina web banco santander", ()=>{
    cy.visit('https://www.bancosantander.es/particulares')
})

When("Slice 3 de la pagina principal", ()=>{
    pagIniSan.clickTercerSliceHipoteca()
})

When("Click en calcular cuota", ()=>{
    pagIniSan.clickCalcularCuota()
})

Then("Comprobar URL de la pagina hipoteca", ()=>{
    cy.url().should('eq', 'https://www.bancosantander.es/particulares/hipotecas/simulador-hipoteca')
})

Then("Comprobar título de la pagina hipoteca", ()=>{
    simHip.comprobarTituloHipoteca()
})

When("Se accede al iframe de los parametros de la hipoteca", ()=>{
    simHip.comprobaryCargarIframe()
})

When("Se borra el precio de la hipoteca por defecto", ()=>{
    simHip.borrarPrecioHipoteca()
})

When("Se escribe el precio {string} de la hipoteca", (precio)=>{
    simHip.escribirPrecioHipoteca(precio)
})

When("Se elige el tipo de hipoteca a adquirir", ()=>{
    simHip.elegirTipoHipoteca()
})

When("Se elige el tipo de vivienda a adquirir", ()=>{
    simHip.elegirTipoVivienda()
})

When("Se especifica si eres el titular", ()=>{
    simHip.elegirTitular()
})

When("Se especifican los ingresos {string} de la hipoteca", (ingresos)=>{
    simHip.escribirIngresosMensuales(ingresos)
})

When("Se especifican los prestamos {string} de la hipoteca", (prestamos)=>{
    simHip.escribirPrestamosMensuales(prestamos)
})

When("Se especifica la fecha de nacimiento de la persona", ()=>{
    simHip.especificarFechaNacimiento()
})

When("Se especifica el lugar de nacimiento de la persona", ()=>{
    simHip.especificarLugarNacimiento()
})

When("Click en Calcular tu cuota", ()=>{
    simHip.pulsarCalcularTuHipoteca()
})

Then("Comprobar e imprimir los resultados", ()=>{
    simHip.comprobarResultadoHipoteca()
})

//Simulador Inversiones sin Pestañas Emergentes

When("Slice 5 de la pagina principal", ()=>{
    pagIniSan.clickQuintoSliceInversiones()
})

When("Click en Invertir", ()=>{
    pagIniSan.clickInvertir()
})

Then("Comprobar URL de la pagina inversiones", ()=>{
    cy.url().should('eq', 'https://www.bancosantander.es/particulares/ahorro-inversion/fondos-inversion/robo-advisor-santander-activa')
})

Then("Comprobar título de la pagina inversiones", ()=>{
    simInv.comprobarTituloInversiones()
})

Then("Comprobar que se ha cargado el iframe correctamente", ()=>{
    simInv.comprobaryCargarIframe()
})

When("Se borra la cantidad de dinero de la inversión por defecto", ()=>{
    simInv.borrarCantidadInversion()
})

When("Se escribe la cantidad de dinero {string} de la inversion", (cantInv)=>{
    simInv.escribirCantidadInversion(cantInv)
})

When("Se escribe la aportacion mensual {string}", (aporMen)=>{
    simInv.escribirAportacionMensual(aporMen)
})

When("Se especifica el estilo inversor", ()=>{
    simInv.elegirEstiloInversor()
})

When("Se especifican los años de inversion {string}", (añosInv)=>{
    simInv.escribirAñosInversion(añosInv)
})

Then("Obtener el resultado e imprimir por pantalla", ()=>{
    simInv.obtenerResultadoInversion()
})