import {
    Given, When, Then, And
} from "@badeball/cypress-cucumber-preprocessor";

import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

const pagIniSan = require("../../pages/po_pagina_santander.cy")
const simHip = require("../../pages/po_simulador_hipoteca.cy")

//METODO SARA
//import paginaInicioSantander from "../../pages/po_pagina_santander.cy"
//const pagIniSan = new paginaInicioSantander();
//import paginaInicioSantander from "../../pages/po_simulador_hipoteca.cy"
//const pagIniSan = new simuladorHipoteca();

Given("Entrar en pagina web santander", ()=>{
    cy.visit('https://www.bancosantander.es/particulares')
})

When("Click en apartado hipoteca", ()=>{
    pagIniSan.clickApartadoHipoteca()
})

When("Click en calcula tu hipoteca", ()=>{
    pagIniSan.clickCalculaHipoteca()
})

Then("Accede a la pagina de hipotecas santander", ()=>{
    cy.visit('https://www.bancosantander.es/particulares/hipotecas/simulador-hipoteca')
})

Then("Se carga en iframe", ()=>{
    simHip.comprobaryCargarIframe()
})

Then("Se comprueba el titulo hipoteca", ()=>{
    simHip.comprobarTituloHipoteca()
})

When("Se borra el precio de la hipoteca", ()=>{
    simHip.borrarPrecioHipoteca()
})

When("Se escribe el nuevo {string} de la hipoteca", (precio)=>{
    simHip.escribirPrecioHipoteca(precio)
})

When("Se elige tipo de hipoteca", ()=>{
    simHip.elegirTipoHipoteca()
})

When("Se elige tipo de vivienda", ()=>{
    simHip.elegirTipoVivienda()
})

When("Se elige titular", ()=>{
    simHip.elegirTitular()
})

When("Se escriben los ingresos y prestamos mensuales", (table)=>{
    table.hashes().forEach((row) => {
        simHip.escribirIngresosMensuales(row.ingresos)
        simHip.escribirPrestamosMensuales(row.prestamos)
    })
})

When("Se escriben los {string} y {string} mensuales", (ingresos,prestamos)=>{
    simHip.escribirIngresosMensuales(ingresos)
    simHip.escribirPrestamosMensuales(prestamos)
})

When("Se especifica la fecha de nacimiento", ()=>{
    simHip.especificarFechaNacimiento()
})

When("Se especifica el lugar de nacimiento", ()=>{
    simHip.especificarLugarNacimiento()
})

When("Se pulsa en Calcular tu cuota", ()=>{
simHip.pulsarCalcularTuHipoteca()
})

Then("Se obtienen los resultados", ()=>{
    simHip.comprobarResultadoHipoteca()
})