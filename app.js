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
    }
}