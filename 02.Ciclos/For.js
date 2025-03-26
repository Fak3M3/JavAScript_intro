// Ejemplos usando for

// 1 pide un numero y muestra su tabla de multiplicar del 1 al 9

const numUser = parseInt(prompt("Ingesa un número para mostrar su tabla de multiplicar: "))
//tamplate usando un texto con el dato de una variable

console.log(`Tabla de multiplicar del número ${numUser}`); 
for(let i = 0; i < 11; i++){
    console.log(`${numUser} x ${i} = ${numUser * i}`);

}


// 2 numeros pares del 1 al 20
// imprimir los numeros pares del 1 al 20
console.log(`Números pares de 1 al 20`)
for(i = 1; i<=20; i++){
    if(i%2 === 0){
        console.log(i);
    }
} 