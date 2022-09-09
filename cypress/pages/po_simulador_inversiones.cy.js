class inversionSantander {
    elements = {
        iframeInversiones: () => cy.get('iframe#iFrameResizer0'),
        tituloInversiones: () => cy.get('iframe#iFrameResizer0').iframe().find('app-main-page').contains('Simula tu inversión con Santander Activa'),
        cantidadInversionInput: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="investment"]'),
        aportacionMensualInput: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="monthlyInput"]'),
        riesgoMedioBajoBtn: () => cy.get('iframe#iFrameResizer0').iframe().find('div[class="risk-icon running mx-auto"]'),
        añosInversion: () => cy.get('iframe#iFrameResizer0').iframe().find('input[id="term"]'),
        resultadoInversion: () => cy.get('iframe#iFrameResizer0').iframe().find('div[class="result-amount"]')
    }

    comprobaryCargarIframe() {
        this.elements.iframeInversiones().should('exist')
        cy.frameLoaded('iframe#iFrameResizer0')
    }

    comprobarTituloInversiones() {
        this.elements.tituloInversiones().should('exist')
    }

    borrarCantidadInversion() {
        this.elements.cantidadInversionInput().clear()
    }

    escribirCantidadInversion(cantInv) {
        this.elements.cantidadInversionInput().type(cantInv)
    }

    escribirAportacionMensual(aporMen) {
        this.elements.aportacionMensualInput().type(aporMen)
    }

    elegirEstiloInversor() {
        this.elements.riesgoMedioBajoBtn().click()
    }

    escribirAñosInversion(añosInv) {
        this.elements.añosInversion().clear().type(añosInv).type('{enter}')
    }

    obtenerResultadoInversion() {
        cy.wait(3000)
        this.elements.resultadoInversion().then(($btn) =>{
            const tit = $btn.text()
            cy.log(tit)
            cy.writeFile('cypress/fixtures/probar.docx','El resultado de la inversion es ' + tit)
            /*
            cy.wait(2000).then(()=>{
                cy.screenshot('simuladores_santander.feature/resultado_inversion',{ capture:'runner' }, {overwrite:true})
            })
            */
        })
    }
}

module.exports = new inversionSantander();