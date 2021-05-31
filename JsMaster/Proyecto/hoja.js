"use strict";
console.clear();

var icon = '<img onclick="updateDate()" src="edit.svg" alt="">'
document.querySelector("#buton").addEventListener("click", getData());
va

function getData() {
  getDataFromAtributes();
  getDataFromHabilidades();
}
function getDataFromAtributes() {

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/atributos");
  xhttp.send();
  //pintar iconos
  function pointBlackWhite(data) {
    let black = `<img class="puntoNegro" src="punto_negro.png" alt="">`;
    let white = `<img class="puntoBlanco" src="punto_blanco.png" alt="">`;
    let datas = data.map(function (pb) {
      if (pb == 1) {
        return black;
      } else {
        return white;
      }
    });
    datas.map(function (i) {
      return i;
    });
    return datas;
  }

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let fisicos = document.querySelector("#fisicos");
      let mentales = document.querySelector("#mentales");
      let sociales = document.querySelector("#sociales");
      fisicos.innerHTML = "";
      //Fisicos
      fisicos.innerHTML += `
        <div class="grid-item">
        <p>${"Fuerza: " + pointBlackWhite(datos.fisicos.fuerza) + icon}</p>
        <p>${"Destreza: " + pointBlackWhite(datos.fisicos.destreza) + icon}</p>
        <p>${"Resistencia: " + pointBlackWhite(datos.fisicos.resistencia) + icon}</p>
        </div>`.replace(/,/g, "");
      //Sociales
      sociales.innerHTML += `
      <div class="grid-item">
      <p>${"Carisma: " + pointBlackWhite(datos.sociales.carisma)
        }</p>
      <p>${"Manipulacion: " + pointBlackWhite(datos.sociales.manipulacion)
        }</p>
      <p>${"Apariencia: " + pointBlackWhite(datos.sociales.apariencia)}</p>
      </div>`.replace(/,/g, "");

      //Mentales
      mentales.innerHTML += `<div class="grid-item">
         <p>${"Percepcion: " + pointBlackWhite(datos.mentales.percepcion)}</p>
        <p>${"Inteligencia: " + pointBlackWhite(datos.mentales.inteligencia)}</p>
        <p>${"Astucia: " + pointBlackWhite(datos.mentales.astucia)}</p>
      </div>`.replace(/,/g, "");
    }
  }
};


function getDataFromHabilidades() {

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", " http://localhost:3000/habilidades");
  xhttp.send();

  //pintar iconos
  function pointBlackWhite(data) {
    let black = `<img class="puntoNegro" src="punto_negro.png" alt="">`;
    let white = `<img class="puntoBlanco" src="punto_blanco.png" alt="">`;
    let datas = data.map(function (pb) {
      if (pb == 1) {
        return black;
      } else {
        return white;
      }
    });
    datas.map(function (i) {
      return i;
    });
    return datas;
  }

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText);
      let talentos = document.querySelector("#talentos");
      let tecnicas = document.querySelector("#tecnicas");
      let conocimientos = document.querySelector("#conocimientos");
      talentos.innerHTML = "";
      //Habilidaes
      //Talentos
      talentos.innerHTML += `
                <div class="grid-item">
                <p>${"Alerta: "}${pointBlackWhite(datos.talentos.alerta)}</p>
                <p>${"Arte: " + pointBlackWhite(datos.talentos.arte)}</p>

                 `.replace(/,/g, "");
      //Tecnicas
      tecnicas.innerHTML += `
                 <p>${"Armas de Fuego: " + pointBlackWhite(datos.tecnica.armas_de_fuego)}</p>
                 <p>${"Artes Marciales: " + pointBlackWhite(datos.tecnica.artes_Marciales)}</p>
                 </div>`.replace(/,/g, "");
      //Conocimientos
      conocimientos.innerHTML += `<div class="grid-item">
                  <p>${"Academisismo: " + pointBlackWhite(datos.conocimientos.academisismo)}</p>
                  <p>${"Ciencias: " + pointBlackWhite(datos.conocimientos.ciencias)}</p>
                  </div>`.replace(/,/g, "");
    }
  }
};



function updateDate() {

  console.log('editanding!!!')
  // Update a user

  // recibir el arreglo de fromNumberToDataFormat
  // reemplazar los datos datos.json 
}

function fromNumberToDataFormat() {
  let array = new Array(5);
  let number = statMinMax();
  for (let i = 0; i < number; ++i) {
    array[i] = 1;
  }
  for (let i = number; i < 5; i++) {
    array[i] = 0;
  }
  console.log(array)
}

function statMinMax() {
  let number = prompt('Ingresa el valor del la caracteristica seleccionada');
  let aux = parseInt(number);
  return aux;
}
