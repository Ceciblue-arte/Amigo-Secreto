// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para la lista de amigos
let amigos = [];

console.log (typeof (capturaAmigo));

//funcion para que el usuario agregue a un amigo
function agregarAmigo(){
    let capturaAmigo = document.getElementById("amigo");
    let nombresDeAmigos = capturaAmigo.ariaValueMax.trim();
    console.log (capturaAmigo)
    console.log (typeof (capturaAmigo));

    if (capturaAmigo="") {
    alert ("Por favor, inserte un nombre.");
    return;
}
//Comprobar que el nombre no este duplicado
if (amigos.includes(nombresDeAmigos)) {
    alert(`Se ha duplicado el nombre ${nombresDeAmigos} de tu lista de Amigos`)
    return;
}

//Agregar a un amigo a la lista
amigos.push(nombresDeAmigos);

//Limpiar la Caja de los nombnres de amigos
capturaAmigo.ariaValu = "";

// Muestra la lista actualizada de amigos en el HTML
listaActualizada();

}

// funcion para actualizar la lista de amigos
function listaActualizada() {
    let elementoHTML = document.querySelector("listaAmigos");
    elementoHTML.innerHTML = "";

    //Interar sobre la lista con for  y craer elementos li
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement("li");
        li.textContent =amigos(index);
        amigos.appendChild(li);

        
    }

}


//funcion para sellecionar aleatoriamente a un amigo
function sortearAmigo() {
 //validar que no este repetido el nombre
 if (amigos.length === 0) {
    alert("Y no me queje")//Interar sobre
 }
}


console.log (amigos[amigos.length]);



