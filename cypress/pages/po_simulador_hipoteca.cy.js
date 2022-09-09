class simuladorHipoteca {
    elements = {
        iframe: () => cy.get('iframe#iFrameResizer0'),
        tituloHipoteca: () => cy.get('iframe#iFrameResizer0').iframe().contains('Calcula la cuota de tu nueva hipoteca'),
        tituloPagHip: () => cy.get('section').find('.titulo_seccion_h1').contains('Simulador de hipoteca'),
        precioHipoteca: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="input_SIMULATION.SLIDER_PRICE"]'),
        tipoHipoteca: () => cy.get('iframe#iFrameResizer0').iframe().find('button[id="radio_button_SIMULATION.MORTGAGE_TYPE0"]'),
        tipoVivienda: () => cy.get('iframe#iFrameResizer0').iframe().find('button[id="radio_button_SIMULATION.HOME_STATUS0"]'),
        titularHipoteca: () => cy.get('iframe#iFrameResizer0').iframe().find('button[id="radio_button_SIMULATION.MORE_THAN_ONE_HOLDER0"]'),
        ingresosMensuales: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="currency_input_SIMULATION.TOTAL_INCOME"]'),
        prestamosMensuales: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="currency_input_SIMULATION.ANOTHER_QUOTAS"]'),
        calendarioBtn: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="date_picker_SIMULATION.BIRTH_DATE"]'),
        dia19Btn: () => cy.get('iframe#iFrameResizer0').iframe().find('bs-calendar-layout').find('td[role="gridcell"][class="ng-star-inserted"]').contains('6'),
        escribirFecha: () => cy.get('iframe#iFrameResizer0').iframe().find('hdfr-date-picker').find('input[id="date_picker_SIMULATION.BIRTH_DATE"]'),
        comunidadAutonomaBtn: () => cy.get('iframe#iFrameResizer0').iframe().find('ng-select').find('input'),
        extremaduraBtn: () => cy.get('iframe#iFrameResizer0').iframe().find('ng-dropdown-panel').contains('Extremadura'),
        calculaTuHipotecaBtn: () => cy.get('iframe#iFrameResizer0').iframe().find('button[id="button_CALCULA TU CUOTA"]'),
        tituloResultadoHipoteca: () => cy.get('iframe#iFrameResizer0').iframe().find('hdfr-offer').contains('Bonificada'),
        precioPrimeros6Meses: () => cy.get('iframe#iFrameResizer0').iframe().find('hdfr-offer').find('h5.mt-0')
    }
    
    comprobaryCargarIframe() {
        this.elements.iframe().should('exist')
        cy.frameLoaded('iframe#iFrameResizer0')
    }

    comprobarTituloHipoteca() {
        this.elements.tituloPagHip().should('exist')
        this.elements.tituloHipoteca().should('exist')
    }

    borrarPrecioHipoteca() {
        this.elements.precioHipoteca().clear()
    }

    escribirPrecioHipoteca(precio) {
        this.elements.precioHipoteca().type(precio)
    }

    elegirTipoHipoteca() {
        this.elements.tipoHipoteca().click()
    }

    elegirTipoVivienda() {
        this.elements.tipoVivienda().click()
    }

    elegirTitular() {
        this.elements.titularHipoteca().click()
    }

    escribirIngresosMensuales(ingresos) {
        this.elements.ingresosMensuales().clear().type(ingresos)
    }

    escribirPrestamosMensuales(prestamos) {
        this.elements.prestamosMensuales().clear().type(prestamos)
    }

    especificarFechaNacimiento() {
        this.elements.calendarioBtn().click().then(()=>{
           // this.elements.dia19Btn().click()
            this.elements.escribirFecha().type('02/08/2004', {force:true})
        })
    }

    especificarLugarNacimiento() {
        this.elements.comunidadAutonomaBtn().click().then(()=>{
            this.elements.extremaduraBtn().click()
        })
    }

    pulsarCalcularTuHipoteca() {
        this.elements.calculaTuHipotecaBtn().click({force:true})
    }

    comprobarResultadoHipoteca() {
        cy.wait(3000)
        this.elements.tituloResultadoHipoteca().should('exist').then(()=>{
            this.elements.precioPrimeros6Meses().then(($btn) =>{
                const tit = $btn.text()
                cy.log(tit)
                /*
                cy.wait(2000).then(()=>{
                    cy.screenshot('simuladores_santander.feature/resultado_hipoteca',{ capture:'runner' }, {overwrite:true})
                })
                */
            })
        })
    }
}

module.exports = new simuladorHipoteca();