const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nom= document.querySelector("#txtNom").value;
    const calculadora= document.querySelector("#txtTipus").value;


    if (nom && calculadora) {
        localStorage.setItem("usuario", nom);
        localStorage.setItem("tipoCalculadora", calculadora);

        if (calculadora === "simple") {
            window.location.href = "../html/calculadora_cientifica.html";  // Redirigir a la página de calculadora simple
        } else if (calculadora === "cientifica") {
            window.location.href = "../html/calculadora_cientifica.html";  // Redirigir a la página de calculadora científica
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

window.addEventListener("DOMContentLoaded", () => {
    // Recuperar los valores guardados en localStorage
    const usuarioGuardado = localStorage.getItem("usuario");
    const tipoCalculadoraGuardado = localStorage.getItem("tipoCalculadora");

    // Si los valores existen, ponerlos en los campos correspondientes
    if (usuarioGuardado && tipoCalculadoraGuardado) {
        document.querySelector("#txtNom").value = usuarioGuardado;
        document.querySelector("#txtTipus").value = tipoCalculadoraGuardado;
    }
});