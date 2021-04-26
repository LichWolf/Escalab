'use strict'

function reloj() {
    var fechaHoy = new Date();
    var horas = fechaHoy.getHours();
    var minutos = fechaHoy.getMinutes();
    var segundos = fechaHoy.getSeconds();

    minutos = anadirCeros(minutos);
    segundos = anadirCeros(segundos);

    document.getElementById("clock").innerHTML = horas + " : " + minutos + " : " + segundos;
    var time = setTimeout(function() { reloj() }, 500);
}

function anadirCeros(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}