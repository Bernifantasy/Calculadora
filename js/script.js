window.onload = function() {
    // Recuperar el nombre del usuario y tipo de calculadora desde localStorage
    const userName = localStorage.getItem("userName");
    const calculatorType = localStorage.getItem("calculatorType");

    // Mostrar el nombre del usuario y tipo de calculadora (o hacer lo que necesites)
    if (userName && calculatorType) {
        alert("Hola " + userName + "! Estás usando una calculadora " + calculatorType + ".");
    } else {
        alert("No se encontraron datos de usuario.");
    }
}