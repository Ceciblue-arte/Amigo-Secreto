// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para la lista de amigos
let amigos =[];

//funcion para que el usuario agregue a un amigo
function agregarAmigo(){
    let capturaAmigo = document.getElementById("amigo");
    let nombresDeAmigos = capturaAmigo.value.trim();

    if (nombresDeAmigos ==="") {
    alert ("Por favor, inserte un nombre.");
    return;
}

//Comprobar que el nombre no este duplicado
if (amigos.includes(nombresDeAmigos)) {
    alert(`El nombree ${nombresDeAmigos} ya está en tu lista de amigos.`);
    return;
}

//Agregar a un amigo a la lista
amigos.push(nombresDeAmigos);

//Limpiar la Caja de los nombnres de amigos
capturaAmigo.value = "";

// Muestra la lista actualizada de amigos en el HTML
listaActualizada();

}

// funcion para actualizar la lista de amigos
function listaActualizada() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    //Interar sobre la lista con for  y craer elementos li
    for (let index = 0; index < amigos.length; index++) {
        const li = document.createElement("li");
        li.textContent = amigos[index];
        listaAmigos.appendChild(li);
    }
}


//funcion para sellecionar aleatoriamente a un amigo
function sortearAmigo() {
 //validar que no este repetido el nombre
 if (amigos.length === 0) {
    alert("No se ha introducido ningun amigo"); //Interar sobre la lista de amigos
    return;
 }
 // Crear un indice aleatorio con Math de la lista
 let indiceAleatorio = Math.floor(Math.random() * amigos.length);

 // Sortear nombre de amigo
 let nombreDeAmigoSorteado = amigos [indiceAleatorio];

 //Mostrar Resultado
 let resultado = document.getElementById("resultado");
 resultado.innerHTML = (`Amigo Secreto: ${nombreDeAmigoSorteado}`);

}