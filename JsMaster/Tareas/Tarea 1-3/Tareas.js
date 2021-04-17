'use strict';


// Ejercicio 1
function ejercicio1() {

    var x = prompt('ingresa el primer numero', 'Escriba acá el número');
    var y = prompt('ingresa el segundo numero', 'Escriba acá el número');
    var opcion = prompt('ingrese una de las siguientes opciones \n Suma \nResta \nMultiplicacion', 'Escriba la operacion que desea realizar')
    var num1 = parseInt(x);
    var num2 = parseInt(y);

    if (opcion.toLowerCase() === 'suma') {
        var resultado = (num1 + num2);
        alert('La suma de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
    } else if (opcion.toLowerCase() === 'resta') {
        var resultado = (num1 - num2);
        alert('La resta de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
    } else if (opcion.toLowerCase() === 'multiplicacion' || opcion.toLowerCase() === 'multiplicación') {
        var resultado = (num1 * num2);
        alert('La multiplicacion de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
    } else {
        confirm('Opcion no valida, por favor ingrese nuevamente y solo escriba una opcion valida');
    }
}
//Ejercicio 2

function ejercicio2() {
    var x = prompt('ingresa un numero', 'Escriba el número');
    var num1 = parseInt(x);
    var parImpar = num1 % 2;
    if (parImpar === 0) {
        confirm('El numero ingresado es par');
    } else {
        confirm('El numero ingresado es Impar');
    }
}

//Ejercicios bucles

function ejercicio3() {
    var x = prompt('ingresa el primer numero', 'Escriba acá el número');
    var y = prompt('ingresa el segundo numero', 'Escriba acá el número');
    var num1 = parseInt(x);
    var num2 = parseInt(y);
    do {
        var opcion = prompt('ingrese una de las siguientes opciones \n 1.- Suma \n 2.- Resta \n 3.-Multiplicacion \n 4.-Division \n Y 0 Para salir', 'Escriba la operacion que desea realizar 0-4')
        switch (parseInt(opcion)) {
            case 0:
                alert('Haz elegido salir, Adios')
                break;
            case 1:
                var resultado = (num1 + num2);
                alert('La suma de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
                break;

            case 2:
                var resultado = (num1 - num2);
                alert('La resta de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
                break;
            case 3:
                var resultado = (num1 * num2);
                alert('La multiplicacion de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
                break;
            case 4:
                var resultado = (num1 / num2);
                alert('La division de ' + num1 + ' y ' + num2 + ' ' + 'es igual a ' + resultado);
                break;
            default:
                confirm('Opcion no numerica o invalidad, vuelva a interlo')
                break;
        }
    }

    while (parseInt(opcion) != 0);
}

function ejercicio4() {

    var x = prompt('ingresa un número', 'Escriba acá el número');
    var num1 = parseInt(x);
    confirm('Los resultados estan en la consola')
    for (let i = 0; i <= 10; i++) {
        console.log('La multiplcacion de ' + num1 + ' por ' + i + ' es ' + num1 * i)
    }
}

function ejercicio5() {
    var x = prompt('¿Cuantos números desea ingresa?', 'Ingresa un valor')
    var num1 = parseInt(x);
    var suma = 0;

    for (let i = 0; i <= num1 - 1; i++) {
        let newNum = prompt('Escriba un valor')
        var aux = parseInt(newNum)
        suma += aux;
    }
    confirm('El primedio  de los ' + num1 + ' numeros introducidos es: ' + (suma / num1))
}

function ejercicio6() {
    var numeros = [0, 3, 6, 9];
    var salir = Boolean;
    do {
        var x = prompt('Ingresa un número de 0 - 9', 'Ingresa un valor')
        var num1 = parseInt(x);
        if (num1 == numeros[0] || num1 == numeros[1] || num1 == numeros[2] || num1 == numeros[3]) {
            salir = false
        } else {
            salir = true
        }
        switch (salir) {
            case true:
                alert('El numero ingresado, no se encuentra en la lista escondida intenando')
                break;
            case false:
                alert('El numero ingresado, si se encuentra en la lista escondida')
                break;
            default:
                break;
        }

    } while (salir === true);

}