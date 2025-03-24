// trabajaremos nuestra logica

// escribiremos una calculadora de edad

let age = 10;

if(age >= 18){
    console.log("Estas grandote");
}else{
    console.log("Estas chirris");
}

// en este codigo pide tu edad y te dice si esta chirris o no
let ageUser = window.prompt("cuantos años tienes");
if(ageUser >= 18){
    console.log("Estas grandote");
}else{
    console.log("Estas chirris");
}

// en este codigo pedimos el nombre del usuario y si este corresponde con el de la base da datos
const user = window.prompt("Cual es tu name??");
const baseDeDatos = "Adriana";

console.log("El usuario es el mismo wn?");
console.log(user == baseDeDatos); 

console.log("Si no es el mismo lo debo hechar");
console.log(user != baseDeDatos); 

console.log("El usuario es bienvenido")
if(user != baseDeDatos){
    console.log("El usuario no es el mismo");
    alert("Bye gato, no sos groso");

}else{
    console.log("El usuario es el mismo");
    alert("Bienvenido groso")
}

// anidamiento usando else if

let edad = pareInt(window.prompt("CUANTOS AÑOS TIENES??"));

if(edad >= 18){
    console.log("Eres mayor de edad");
}else if(edad < 0){
    console.log("Edad no valida. Ingresa un numero");
}else if (isNaN(edad)){
    console.log("Esa edad no es valida")
}else{
    console.log("Eres menor de edad");
}

