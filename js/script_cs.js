let operand1="0";
let operand2="";
let operador="";
let errorMsg="";
const Max_Llargada=5;
const Separador_Decimal=".";
const pantalla=document.getElementById("pantallaresultat")

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
    if (operand1 === "0" && operador === "") {
        operand1 = "";  
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "1";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "1";
            } 
    }
    
    let pantalla = document.getElementById("pantallaresultat");

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}


function Tractar_Dos()
{
    if (operand1 === "0" && operador === "") {
        operand1 = "";  
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "2";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "2";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}

function Tractar_Tres()
{
    if (operand1 === "0" && operador === "") {
        operand1 = ""; 
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "3";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "3";
            } 
    }
    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
        } 
        else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}


function Tractar_Quatre()
{
    if (operand1 === "0" && operador === "") {
        operand1 = "";  
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "4";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "4";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}


function Tractar_Cinc()
{
    if (operand1 === "0" && operador === "") {
        operand1 = "";
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "5";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "5";
            } 
    }
    
    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}


function Tractar_Sis()
{
    if (operand1 === "0" && operador === "") {
        operand1 = ""; 
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "6";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "6";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}


function Tractar_Set()
{
    if (operand1 === "0" && operador === "") {
        operand1 = "";  
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "7";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "7";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}


function Tractar_Vuit()
{
    if (operand1 === "0" && operador === "") {
        operand1 = "";
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "8";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "8";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);


    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}

function Tractar_Nou()
{
    if (operand1 === "0" && operador === "") {
        operand1 = ""; 
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "9";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "9";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);

    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}

function Tractar_Zero()
{
    if (operand1 === "0" && operador === "") {
        operand1 = "";
    }
    if(operador==="")
    {
        if(operand1.length<Max_Llargada)
        {
            operand1 += "0";
        }        
    }else{
        if(operand2.length<Max_Llargada)
            {
                operand2 += "0";
            } 
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);

    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}

function Tractar_Coma()
{
    if(operador==="")
    {
        if(!operand1.includes(Separador_Decimal))
        {
            operand1+=Separador_Decimal;
        }
    }else{
        if(!operand2.includes(Separador_Decimal))
        {
            operand2+=Separador_Decimal;
        }
    }

    let [error1, errorMsg1]=Comprovar_Operand(operand1);
    let [error2, errorMsg2]=Comprovar_Operand(operand2);

    if (error1 === 0 && error2 === 0) {
        pantalla.value = operand1 + operador + operand2;
    } else {
        if (error1 !== 0) {
            operand1 = operand1.substring(0, operand1.length - 1);
        } else if (error2 !== 0) {
            operand2 = operand2.substring(0, operand2.length - 1);
        }
    }
}

function Clear()
{
    operand1="";
    operand2="";
    operador="";
    document.getElementById("pantallaresultat").value="0";
}

function Sumar()
{
    if(operand1 !== "" && operador ==="" && operand2 === "")
    {
        operador="+";
        mostrarPantalla();
    }else if(operand1 !=="" && operador !== "" && operand2 !== "")
    {
        Igual();
        operador="+";
    }
}

function Restar()
{
    if(operand1 !== "" && operador ==="" && operand2 === "")
        {
            operador="-";
            mostrarPantalla();
        }else if(operand1 !=="" && operador !== "" && operand2 !== "")
        {
            Igual();
            operador="-";
        }

}

function Multiplicar()
{
    if(operand1 !== "" && operador ==="" && operand2 === "")
        {
            operador="*";
            mostrarPantalla();
        }else if(operand1 !=="" && operador !== "" && operand2 !== "")
        {
            Igual();
            operador="*";
        }

}

function Dividir()
{
    if(operand1 !== "" && operador ==="" && operand2 === "")
        {
            operador="/";
            mostrarPantalla();
        }else if(operand1 !=="" && operador !== "" && operand2 !== "") 
        {
            Igual();
            operador="/";
        }

}


function Igual()
{
    if(operand1 !=="" && operador!=="" && operand2!=="")
    {
        let resultat;
        const num1= parseFloat(operand1);
        const num2=parseFloat(operand2);

        switch(operador)
        {
            case"+":
                resultat= num1+num2;
                break;
            case"-":
                resultat=num1-num2;
                break;
            case"*":
                resultat=num1*num2;
                break;
            case"/":
                if(num2!==0)    
                {
                    resultat=num1/num2;
                }
                else{
                    resultat="Error"
                }
                break;
        }
        operand1=resultat.toString();
        document.getElementById("pantallaresultat").value=operand1;
        operador="";
        operand1="";
        operand2="";

    }
}

function Esborrar_un()
{

}


