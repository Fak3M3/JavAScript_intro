// let caracter; //scope global

// do{
//     caracter = prompt("Ingresa un caracter: ");
// }while(caracter != "x");
// console.log("Ingresaste el caracter X 😠!!");


// ingreso de una contraseña
// ingresara el usuario hasta que no ingrese la palabra

// hardcoding
const password = "chupañema";
let pass;

do{
    pass = prompt("Ingresa la contraseña: ");
    if(pass !== password){
        console.log("contraseña incorrecta, no entras 😝")
    }
}while(pass !== password);
    console.log("contraseña correcta 🥳")