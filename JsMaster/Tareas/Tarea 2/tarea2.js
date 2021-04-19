function Persona(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    // this.fillinData = function() {

    //     document.writeln("<h2> Data ingresada </h2>",
    //         "<p>El nombre ingresado es: </p>", "<span>" + this.name + "</span>",
    //         "<p>El apellido ingresado es: </p>", "<span>" + this.lastName + "</span>",
    //         "<p>La edad ingresada es: </p>", "<span>" + this.age + "</span>"
    //     )
    // }
}




function validateData() {
    var persona1 = new Persona(document.getElementById('name').value, document.getElementById('lastName').value, document.getElementById('age').value)
    if (persona1.name == '') {
        alert('Debes rellenar el campo Nombre');
    }
    if (persona1.lastName == '') {
        alert('Debes rellenar el campo Apellido');
    }
    if (persona1.age == '') {
        alert('Debes rellenar el campo Edad');
    }

    if (persona1.name !== '' || persona1.lastName !== '' || persona1.age !== '') {
        const titulo = document.querySelector('.titulo')
        titulo.textContent = "Data Ingresada";
        const nombre = document.querySelector('.nombre')
        nombre.textContent = "El nombre ingresado es: "
        const nombre2 = document.querySelector('.nombre2')
        nombre2.textContent = document.getElementById('name').value;

        const apellido = document.querySelector('.apellido')
        apellido.textContent = "El nombre ingresado es: "
        const apellido2 = document.querySelector('.apellido2')
        apellido2.textContent = document.getElementById('lastName').value;

        const edad = document.querySelector('.edad')
        edad.textContent = "El nombre ingresado es: "
        const edad2 = document.querySelector('.edad2')
        edad2.textContent = document.getElementById('age').value;

    }
}