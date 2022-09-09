Feature: Simuladores Banco Santander sin Pestañas Emergentes

    Background:
        Given Entrar en pagina web banco santander

    @sim_hipotecas
    Scenario Outline: Simulador Hipoteca sin Pestañas Emergentes
        When Slice 3 de la pagina principal
        And Click en calcular cuota
        Then Comprobar URL de la pagina hipoteca
        And Comprobar título de la pagina hipoteca
        When Se accede al iframe de los parametros de la hipoteca
        When Se borra el precio de la hipoteca por defecto
        And Se escribe el precio '<precio>' de la hipoteca
        And Se elige el tipo de hipoteca a adquirir
        And Se elige el tipo de vivienda a adquirir
        And Se especifica si eres el titular
        And Se especifican los ingresos '<ingresos>' de la hipoteca
        And Se especifican los prestamos '<prestamos>' de la hipoteca
        And Se especifica la fecha de nacimiento de la persona
        And Se especifica el lugar de nacimiento de la persona
        And Click en Calcular tu cuota
        Then Comprobar e imprimir los resultados
        Examples:
            | precio | ingresos | prestamos |
            | 350000 | 5000     | 200       |
            | 50000  | 7000     | 400       |
            | 200000 | 2500     | 300       |

    @sim_inversiones
    Scenario Outline: Simulador Inversiones sin Pestañas Emergentes
        When Slice 5 de la pagina principal
        And Click en Invertir
        Then Comprobar URL de la pagina inversiones
        And Comprobar título de la pagina inversiones
        And Comprobar que se ha cargado el iframe correctamente
        When Se borra la cantidad de dinero de la inversión por defecto
        And Se escribe la cantidad de dinero '<cantDin>' de la inversion
        And Se escribe la aportacion mensual '<aporMen>'
        And Se especifica el estilo inversor
        And Se especifican los años de inversion '<añosInv>'
        Then Obtener el resultado e imprimir por pantalla
        Examples:
            | cantDin | aporMen | añosInv |
            | 2000    | 150     | 13      |
            | 3000    | 200     | 14      |
