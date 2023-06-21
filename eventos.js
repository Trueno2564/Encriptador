'use strict'

var input_text = document.querySelector(".text_input");
var eButton = document.querySelector(".eButton");
var dButton = document.querySelector(".dButton");
var resultado = document.querySelector(".result");
var vacio = document.querySelector(".vacio");
var btn_copiar = document.querySelector("#btn_copiar");

input_text.addEventListener('focus', function(){
    input_text.style.border = "1px solid #0A3871";
});

input_text.addEventListener('blur', function(){
    input_text.style.border = "none";
});


eButton.addEventListener('click', function(){
    obtenerTexto();
});

dButton.addEventListener('click', function(){
    obtenerTexto();
});

function obtenerTexto(){
    var text_input = document.querySelector(".text_input").value;
    if(text_input == ""){
        input_text.style.boder = "5px solid #FF0000";
    }else{
        var parrafo = document.createElement("p");
        btn_copiar.style.display = "block";
        resultado.style.flexDirection = "column-reverse";
        vacio.remove();
        parrafo.append(text_input);
        resultado.append(parrafo);
        console.log(text_input);
    }
}
