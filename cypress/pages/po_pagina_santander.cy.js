class paginaInicioSantander {
    elements = {
        hipotecasBtn: () => cy.get('[title="HIPOTECAS"]'),
        calculaHipotecaBtn: () => cy.get('[class=" s_btn btn-s-rojo-positivo"]').contains('CALCULA TU HIPOTECA'),
        prestamosBtn: () => cy.get('[title="PRÉSTAMOS  Y RENTING"]'),
        simulaPrestamoBtn: () => cy.get('#120').contains('SIMULA TU PRÉSTAMO PERSONAL'),
        slice3Btn: () => cy.get('section#ns_Z7_3OKIGJ82O823E0Q98SP49GN954_').find('[aria-label="Go to slide 3"]'),
        slice5Btn: () => cy.get('section#ns_Z7_3OKIGJ82O823E0Q98SP49GN954_').find('[aria-label="Go to slide 4"]'),
        calcularCuotaBtn: () => cy.get('section').find('[role="link"]').contains('CALCULAR CUOTA'),
        invertirBtn: () => cy.get('section').find('[role="link"]').contains('INVERTIR')
    }

    clickApartadoHipoteca() {
        this.elements.hipotecasBtn().click();
    }

    clickCalculaHipoteca() {
        this.elements.calculaHipotecaBtn().click();
    }

    clickApartadoPrestamos() {
        this.elements.prestamosBtn().click()
    }

    clickSimulaPrestamo() {
        this.elements.simulaPrestamoBtn().click()
    }

    clickTercerSliceHipoteca() {
        this.elements.slice3Btn().click()
    }

    clickQuintoSliceInversiones() {
        this.elements.slice5Btn().click()
    }

    clickCalcularCuota() {
        this.elements.calcularCuotaBtn().click({force:true})
    }

    clickInvertir() {
        this.elements.invertirBtn().click()
    }

}

module.exports = new paginaInicioSantander();

//METODO SARA
//export default paginaInicioSantander