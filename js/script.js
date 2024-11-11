const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nom= document.querySelector("#txtNom").value;
    const calculadora= document.querySelector("#txtTipus").value;


    if (nom && calculadora) {
        console.log(`Usuario: ${nom}`);
        console.log(`Tipo de calculadora: ${calculadora}`);

        console.log("Ambos campos tienen valor. Redirigiendo...");
        // Aquí puedes redirigir a otra página dependiendo del tipo de calculadora
        if (calculadora === "simple") {
            window.location.href = "/html/calculadora_cientifica.html";  // Redirigir a la página de calculadora simple
        } else if (calculadora === "cientifica") {
            window.location.href = "/html/calculadora_cientifica.html";  // Redirigir a la página de calculadora científica
        }
    } else {
        alert("Por favor, completa todos los campos.");
    }

});