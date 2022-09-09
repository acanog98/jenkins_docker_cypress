class simuladorPrestamos{
    elements = {
        iframePrest: () => cy.get('iframe[data-id="120"]'),
        tituloIframe: () => cy.get('iframe[data-id="120"]').iframe().find('section').contains('¿Eres cliente Santander?'),
        noSoyClienteBtn:() =>  cy.get('iframe[data-id="120"]').iframe().find('[target="_blank"]').contains('No soy cliente'),
        tituloPrestamos: () => cy.get('[data-id="tab_5882120c-597d-409a-994f-383f51f1941a"]').contains('Calcula tu cuota con el Simulador de Préstamos Personales'),
        prestamoCocheBtn: () => cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('[ng-click="SelectLoan(loan)"]').contains('Coche'),
        dineroPrestamo: () => cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('input#amount'),
        mesesPrestamo: () => cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('input#term'),
        cocheElectricoBtn: () => cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('#electricVehicle').find('[ng-click="switch()"]').contains('Sí'),
        resultadoCuotaMensual: () => cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('[class="res r1"]').find('[ng-if="!ShowMoreInstallments() && getCarencyMonths() == 0"]'),
        informePDFBtn: () => cy.get('iframe#a26834c6d-cb00-4adb-8d62-067391ed29ca').iframe().find('[ng-click="GetPDF()"]').contains('Descarga tu informe en PDF')
    }

    cargarIframePrestamos(){
        cy.frameLoaded('iframe[data-id="120"]')
        this.elements.tituloIframe().should('exist')
    }

    clickNoSoyCliente(){
        this.elements.noSoyClienteBtn().click()
    }

    comprobarTituloPrestamo(){
        this.elements.tituloPrestamos().should('exist')
    }

    elegirPrestamoCoche(){
        this.elements.prestamoCocheBtn().click({force:true})
    }

    escribirDineroPrestamo(dinero){
        this.elements.dineroPrestamo().clear().type(dinero).then(()=>{
            cy.screenshot('simulador_prestamos.feature/dinero_prestamo',{ capture:'runner' }, {overwrite:true})
        })
    }

    escribirMesesPrestamo(meses){
        this.elements.mesesPrestamo().clear().type(meses).then(()=>{
            cy.screenshot('simulador_prestamos.feature/meses_prestamo',{ capture:'runner' }, {overwrite:true})
        })
    }

    elegirCocheElectrico(){
        this.elements.cocheElectricoBtn().click()
    }

    almacenaResultadoCuotaMensual(){
        this.elements.resultadoCuotaMensual().then(($ej1)=>{
            const c_mensual = $ej1.text()
            cy.log(c_mensual)
            cy.screenshot('simulador_prestamos.feature/resultado_prestamo',{ capture:'runner' }, {overwrite:true})
        })
    }

    obtenerInformePDF(){
        this.elements.informePDFBtn().click()
    }
}
module.exports = new simuladorPrestamos();