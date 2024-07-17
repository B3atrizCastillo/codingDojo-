const sesionbutton = document.getElementById("sesionbutton");
const megusta1 = document.getElementById("megusta1");
let  MeG1 = 1;
const megusta2 = document.getElementById("megusta2");
let MeG2 = 1;
const def = document.getElementById("def");


// Cuando sé de clic en el botón “Iniciar sesión” este debe cambiar a «Cerrar sesión».
var botonCambiar = document.getElementById("sesionbutton");

sesionbutton.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Cerrar Sesion";
})



// Cuando se da clic en “Agregar definición” el botón debe desaparecer.
def.addEventListener("click", function() {
    this.remove();
})


// Cuando se da clic en “Me gusta” para una de las definiciones se dispara una alarma indicando que te gusto la definición junto con el título de la misma.
// Cada vez que se le da clic al botón de like de cada definición, este debe aumentar el conteo de likes de cada definición.
document.getElementById("megusta1").addEventListener("click", function() {
    var likes = document.getElementById("like1")
    var numlikes = parseInt(likes.innerText);
    numlikes++
    likes.innerText = numlikes
    alert("Le diste me gusta al Gato Atigrado")
})

document.getElementById("megusta2").addEventListener("click", function() {
    var likes = document.getElementById("like2")
    var numlikes = parseInt(likes.innerText);
    numlikes++
    likes.innerText = numlikes
    alert("Le diste me gusta al Golder Retriever")
})