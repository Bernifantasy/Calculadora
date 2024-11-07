let operand1="0";
let operand2="";
let operador="";
let errorMsg="";
const Max_Llargada=5;

function mostrarPantalla()
{
    document.getElementById("pantallaresultat").value=operand1 + operador + operand2;
}

document.addEventListener("DOMContentLoaded", function () {
    operand1 = "0";
    document.getElementById("pantallaresultat").value = operand1;
  });

function Comprovar_Operand(operand)
{
    if(operand.length > Max_Llargada)
    {
        return [1, "Massa Llarg"];
    }else
    {
        return [0,"Tot correcte"];
    }

}

function Tractar_Un()
{
    operand1 += "1";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Dos()
{
    operand1 += "2";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Tres()
{
    operand1 += "3";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Quatre()
{
    operand1 += "4";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Cinc()
{
    operand1 += "5";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Sis()
{
    operand1 += "6";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Set()
{
    operand1 += "7";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Vuit()
{
    operand1 += "8";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Nou()
{
    operand1 += "9";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Tractar_Zero()
{
    operand1 += "0";
    let pantalla = document.getElementById("pantallaresultat");
    let pantalla_info = document.getElementById("pantallainfo");

    let [error, errorMsg]=Comprovar_Operand(operand1);

    if(error===0)
    {
        pantalla.value = operand1;
        pantalla_info.value = "";
    }
    else
    {
        operand1 = operand1.substring(0, operand1.length - 1);
        console.log("error desfem operand1" + operand1);
        pantalla_info.value = errorMsg;
    }
}

function Clear()
{
    operand1="";
    operand2="";
    operador="";
    document.getElementById("pantallaresultat").value="";
    document.getElementById("pantallainfo").value="";
}

function Sumar()
{
    if(operand1 !== "" && operador ==="")
    {
        operador="+";
        mostrarPantalla();
    }else if(operand1 !=="" && operand2 !== "")
    {
        Igual();
        operador="+";
    }
}

function Restar()
{
    if(operand1 !== "" && operador ==="")
        {
            operador="-";
            mostrarPantalla();
        }else if(operand1 !=="" && operand2 !== "")
        {
            Igual();
            operador="-";
        }

}

function Multiplicar()
{
    if(operand1 !== "" && operador ==="")
        {
            operador="*";
            mostrarPantalla();
        }else if(operand1 !=="" && operand2 !== "")
        {
            Igual();
            operador="*";
        }

}

function Dividir()
{
    if(operand1 !== "" && operador ==="")
        {
            operador="/";
            mostrarPantalla();
        }else if(operand1 !=="" && operand2 !== "")
        {
            Igual();
            operador="/";
        }

}
























