let operand1 = "0";
        let operand2 = "";
        let operador = "";

        function mostrarPantalla() {
            let pantalla = document.getElementById("pantallaresultat");
            pantalla.value = operand1 + operador + operand2;
        }

        function Clear() {
            operand1 = "0";
            operand2 = "";
            operador = "";
            mostrarPantalla();
        }

        function Esborrar_un() {
            if (operador === "") {
                operand1 = operand1.slice(0, -1) || "0";
            } else {
                operand2 = operand2.slice(0, -1);
            }
            mostrarPantalla();
        }

        function Sumar() { operador = "+"; mostrarPantalla(); }
        function Restar() { operador = "-"; mostrarPantalla(); }
        function Multiplicar() { operador = "*"; mostrarPantalla(); }
        function Dividir() { operador = "/"; mostrarPantalla(); }

        function Igual() {
            let resultado;
            const num1 = parseFloat(operand1);
            const num2 = parseFloat(operand2);

            switch (operador) {
                case "+": resultado = num1 + num2; break;
                case "-": resultado = num1 - num2; break;
                case "*": resultado = num1 * num2; break;
                case "/": resultado = num2 !== 0 ? num1 / num2 : "Error"; break;
            }
            operand1 = resultado.toString();
            operador = "";
            operand2 = "";
            mostrarPantalla();
        }

        function Tractar_Numero(num) {
            if (operador === "") {
                operand1 = operand1 === "0" ? num.toString() : operand1 + num;
            } else {
                operand2 += num;
            }
            mostrarPantalla();
        }

        function Tractar_Set() { Tractar_Numero(7); }
        function Tractar_Vuit() { Tractar_Numero(8); }
        function Tractar_Nou() { Tractar_Numero(9); }
        function Tractar_Quatre() { Tractar_Numero(4); }
        function Tractar_Cinc() { Tractar_Numero(5); }
        function Tractar_Sis() { Tractar_Numero(6); }
        function Tractar_Un() { Tractar_Numero(1); }
        function Tractar_Dos() { Tractar_Numero(2); }
        function Tractar_Tres() { Tractar_Numero(3); }
        function Tractar_Zero() { Tractar_Numero(0); }
        function Tractar_Coma() { if (!operand1.includes(".")) operand1 += "."; mostrarPantalla(); }

        // Funciones científicas
        function Calcular_Seno() {
            operand1 = Math.sin(parseFloat(operand1)).toString();
            mostrarPantalla();
        }

        function Calcular_Coseno() {
            operand1 = Math.cos(parseFloat(operand1)).toString();
            mostrarPantalla();
        }

        function Calcular_Tangente() {
            operand1 = Math.tan(parseFloat(operand1)).toString();
            mostrarPantalla();
        }

        function Calcular_Log() {
            operand1 = Math.log10(parseFloat(operand1)).toString();
            mostrarPantalla();
        }

        function Calcular_Raiz() {
            operand1 = Math.sqrt(parseFloat(operand1)).toString();
            mostrarPantalla();
        }