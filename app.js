// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para la lista de amigos
let amigos = [];

console.log (typeof (capturaAmigo));

//funcion para que el usuario agregue a un amigo
function agregarAmigo(){
    let capturaAmigo = document.getElementById("amigo");
    let nombresDeAmigos = capturaAmigo.ariaValueMax.trim();
    console.log (nombresDeAmigos)
    console.log (typeof (capturaAmigo));

    if (capturaAmigo="") {
    alert ("Por favor, inserte un nombre.");
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
    return;
}



//funcion para sellecionar aleatoriamente a un amigo
function sortearAmigo() {

    
}


console.log (amigos[amigos.length-1]);



