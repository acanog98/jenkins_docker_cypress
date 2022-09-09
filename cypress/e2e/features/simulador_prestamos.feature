Feature: Simulador Préstamos Banco Santander

    Scenario Outline: Prueba Iframes Prestamos
        Given Entrar en pagina web santander pres
        When Click en apartado prestamos
        And Click en calcula tu prestamo
        Then Accede al iframe de cliente santander
        When Se elige la opcion No soy cliente
        Then Accede a la pagina de prestamos
        And Se comprueba el título del simulador de prestamos
        When Se elige el tipo de prestamo de coche
        And Se escribe el '<dinero>' del prestamo
        And Se escribe los '<meses>' del prestamo
        And Se elige el tipo de coche electrico
        Then Se obtiene el resultado de la cuota mensuales
        When Se obtiene el informe final en PDF
        Then Se descarga el informe final en PDF
        Examples:
            | dinero | meses |
            | 50000  | 75    |
            | 75000  | 60    |

