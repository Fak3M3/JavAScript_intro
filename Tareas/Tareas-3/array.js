// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.

let frutas = ['kiwi', 'pitahaya','kiwi' , 'pitahaya', 'pitahaya', 'pitahaya','piña', 'melón', 'pistaches'];
let contadorF = {};

for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    if(contadorF[fruta]){
        contadorF[fruta]++;
    }else{
        contadorF[fruta] = 1;
    }
}

console.log(`CUANTAS FRUTAS QUEDAN`);
for (let fruta in contadorF) {
    console.log(`${fruta}: ${contadorF[fruta]}`);
}