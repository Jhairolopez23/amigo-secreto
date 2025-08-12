// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];

function agregarAmigo(){
    let amigoIngresado = document.getElementById("amigo").value;
    if(amigoIngresado == ""){
        alert('Ingrese un nombre');
    }else{
        //Añadimos el amigo al arreglo.
        amigosIngresados.push(amigoIngresado);

        //Limpiamos el campo de texto.
        document.getElementById("amigo").value = "";
        //Mostramos la lista actualizada.
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    //Obtenemos el elemento donde se mostrará la lista.
    let lista = document.getElementById("listaAmigos");
    // Limpiamos la lista actual.
    lista.innerHTML = "";

    // Recorremos el arreglo de amigos ingresados.
    for(let i = 0; i < amigosIngresados.length; i++){
        // Creamos un nuevo elemento de lista.
        let li = document.createElement("li");
        // Asignamos el nombre del amigo al elemento de lista.
        li.textContent = amigosIngresados[i];
        // Añadimos el elemento del array a la lista.
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigosIngresados.length < 2){
        alert("Necesitas al menos 2 amigos para sortear.");
        return;
    }else{
        let indice = Math.floor(Math.random() * amigosIngresados.length);
        let amigo = amigosIngresados[indice];
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        document.getElementById("resultado").innerHTML =`Amigo sorteado: ${amigo}`;
    }
}
