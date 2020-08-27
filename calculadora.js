//traer simbolos de html a js
function init(){
var display_resultado = document.getElementById("display_resultado");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var division = document.getElementById("division");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var multiplicacion = document.getElementById("multiplicacion");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var resta = document.getElementById("resta");
var igual = document.getElementById("igual");
var reset = document.getElementById("reset");
var cero = document.getElementById("cero");
var suma = document.getElementById("suma");

var operador = "";
var resultado = 0;

//numeros
siete.onclick = function(e){
    display_resultado.value += "7";
}
ocho.onclick = function(e){
    display_resultado.value += "8";
}
nueve.onclick = function(e){
    display_resultado.value += "9";
}
cuatro.onclick = function(e){
    display_resultado.value += "4";
}
cinco.onclick = function(e){
    display_resultado.value += "5";
}
seis.onclick = function(e){
    display_resultado.value += "6";
}
uno.onclick = function(e){
    display_resultado.value += "1";
}
dos.onclick = function(e){
    display_resultado.value += "2";
}
tres.onclick = function(e){
    display_resultado.value += "3";
}
cero.onclick = function(e){
    display_resultado.value += "0";
}
//end numeros

//simbolos
igual.onclick = function(e){
    var valor_actual = parseInt(display_resultado.value);
    operacion(resultado, valor_actual, operador)
}
reset.onclick = function(e){
    display_resultado.value = "";
    resultado = 0;
    operador = null;
}
//end simbolos

//operadores
suma.onclick = function(e){
    operador = "+";
    resultado = parseInt(display_resultado.value)
    display_resultado.value = "";
}
resta.onclick = function(e){
    operador = "-";
    resultado = parseInt(display_resultado.value)
    display_resultado.value = "";
}
multiplicacion.onclick = function(e){
    operador = "*";
    resultado = parseInt(display_resultado.value)
    display_resultado.value = "";
}
division.onclick = function(e){
    operador = "/";
    resultado = parseInt(display_resultado.value)
    display_resultado.value = "";
}
//end operadores
}

//funciones
function operacion(valor, valor_actual, operacion){
    switch (operacion){
        case "+":
            //ejecutar codigo
            display_resultado.value = suma(valor, valor_actual);
            break;
        case "-":
            //ejecutar codigo
            display_resultado.value = resta(valor, valor_actual);
            break;
        case "*":
            //ejecutar codigo
            display_resultado.value = multiplicacion(valor, valor_actual);
            break;
        case "/":
            //ejecutar codigo
            display_resultado.value = division(valor, valor_actual);
            break;
                        
        default:
            break;
    }
}
function suma (valor1, valor2){
    var resultado = (valor1 + valor2);
    return resultado;
}
function resta (valor1, valor2){
    var resultado = (valor1 - valor2);
    return resultado;
}
function multiplicacion (valor1, valor2){
    var resultado = (valor1 * valor2);
    return resultado;
}
function division (valor1, valor2){
    var resultado = (valor1 / valor2);
    return resultado;
}
//end funciones