Feature: Simulador Hipoteca Banco Santander

    Background:
        Given Entrar en pagina web santander
        When Click en apartado hipoteca
        When Click en calcula tu hipoteca
        Then Accede a la pagina de hipotecas santander
        And Se carga en iframe
        And Se comprueba el titulo hipoteca
        When Se borra el precio de la hipoteca

    Scenario: Prueba iframes simulador hipoteca
        When Se escribe el nuevo "350000" de la hipoteca
        And Se elige tipo de hipoteca
        And Se elige tipo de vivienda
        And Se elige titular
        And Se escriben los ingresos y prestamos mensuales
            | ingresos | prestamos |
            | 5000     | 200       |
            | 4000     | 300       |


    Scenario Outline: Prueba iframes simulador hipoteca diferentes scenarios
        When Se escribe el nuevo '<precio>' de la hipoteca
        And Se elige tipo de hipoteca
        And Se elige tipo de vivienda
        And Se elige titular
        And Se escriben los '<ingresos>' y '<prestamos>' mensuales
        When Se especifica la fecha de nacimiento
        And Se especifica el lugar de nacimiento
        And Se pulsa en Calcular tu cuota
        Then Se obtienen los resultados
        Examples:
        | precio | ingresos | prestamos |
        | 350000 | 5000     | 200       |
        | 50000  | 7000     | 400       |
        | 200000 | 2500     | 300       |


