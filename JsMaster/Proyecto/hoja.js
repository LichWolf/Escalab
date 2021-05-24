"usect";
console.clear();

document.querySelector("#buton").addEventListener("click", gepata());

function gepata() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "datos.json");
  xhttp.send();

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
      let talentos = document.querySelector("#talentos");
      let tecnicas = document.querySelector("#tecnicas");
      let conocimientos = document.querySelector("#conocimientos");
      fisicos.innerHTML = "";

      for (let i of datos) {
        //Fisicos
        fisicos.innerHTML += `
        <div class="grid-item">
        <p>${"Fuerza: " + pointBlackWhite(i.atributos.fisicos.fuerza)}</p>
        <p>${"Destreza: " + pointBlackWhite(i.atributos.fisicos.destreza)}</p>
        <p>${
          "Resistencia: " + pointBlackWhite(i.atributos.fisicos.resistencia)
        }</p>
        </div>`.replace(/,/g, "");
        //Sociales
        sociales.innerHTML += `
        <div class="grid-item">
        <p>${
          "Percepcion: " + pointBlackWhite(i.atributos.mentales.percepcion)
        }</p>
        <p>${
          "Inteligencia: " + pointBlackWhite(i.atributos.mentales.inteligencia)
        }</p>
        <p>${"Astucia: " + pointBlackWhite(i.atributos.mentales.astucia)}</p>
        </div>`.replace(/,/g, "");

        //Mentales
        mentales.innerHTML += `<div class="grid-item">
           <p>${
             "Percepcion: " + pointBlackWhite(i.atributos.mentales.percepcion)
           }</p>
          <p>${
            "Inteligencia: " +
            pointBlackWhite(i.atributos.mentales.inteligencia)
          }</p>
          <p>${"Astucia: " + pointBlackWhite(i.atributos.mentales.astucia)}</p>
          </div>`.replace(/,/g, "");
        //Habilidaes
        //Talentos
        talentos.innerHTML += `
        <div class="grid-item">
        <p>${"Alerta: "}
        ${pointBlackWhite(i.habilidades.talentos.alerta)}</p>

        
          <p>${"Arte: " + pointBlackWhite(i.habilidades.talentos.arte)}</p>
        
         `.replace(/,/g, "");
        //Tecnicas
        tecnicas.innerHTML += `
         <p>${
           "Armas de Fuego: " +
           pointBlackWhite(i.habilidades.tecnica.armas_de_fuego)
         }</p>
         <p>${
           "Artes Marciales: " +
           pointBlackWhite(i.habilidades.tecnica.artes_Marciales)
         }</p>
         </div>`.replace(/,/g, "");
        //Conocimientos
        conocimientos.innerHTML += `<div class="grid-item">
          <p>${
            "Academisismo: " +
            pointBlackWhite(i.habilidades.conocimientos.academisismo)
          }</p>
        
        
          <p>${
            "Ciencias: " + pointBlackWhite(i.habilidades.conocimientos.ciencias)
          }</p>
          </div>`.replace(/,/g, "");
      }
    }
  };
}
