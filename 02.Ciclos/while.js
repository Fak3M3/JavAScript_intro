// haremos ejemplos de ciclos con while

// 1
let index = 0;
while(index < 11) {
    console.log(index);
    index++;
}

// 2

let numberUser = parseInt(prompt("Ingresa un número"));
let contador = 0;

while(contador <= numberUser){
    console.log(contador)
    contador ++;
}

// 3

let n = parseInt(prompt("Ingrese un número positivo"));
let contador2 = 1;
let suma = 0;

while(contador2 <= n){
    suma +=contador2;
    contador2++;
}
console.log("La suma de los primeros", n , "numeros naturales es:", suma);