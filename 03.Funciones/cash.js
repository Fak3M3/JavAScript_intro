// El saldo inicial de la cuenta es de $1000.
// ● El usuario puede ingresar un monto a retirar.
// ● Se verifica si el monto solicitado es menor o igual al saldo disponible.
// ● Si el monto es válido, se realiza la transacción y se actualiza el saldo.
// ● Se informa al usuario del nuevo saldo disponible.
// ● Si el monto es mayor al saldo disponible, se informa al usuario que la operación no
// puede realizarse por falta de fondos.

//declarar

let saldo = 1000;
let historial = [];
let intentoFallido = 0; //intentos fallidos de retiros

//funcion

function getSaldo(){
    console.log(`Tu saldo actual es: $${saldo}`);
    alert(`Tu saldo actual es: $${saldo}`);
};

function retirarSaldo(){
    //validación de intentos
    if(intentoFallido >= 4){
        alert(`Has excedido el numero de intentos fallidos, tu cuenta ah sido bloqueada`);
        return; //guarda el valor de intentos y si aun no se pasa lo deja seguiry si si lo saca
    }

    //solicitar monto a retirar
    let monto = parseFloat(prompt(`INGRESE EL MONTO A RETIRAR`));
    if(isNaN(monto) || monto <= 0){
        alert(`Monto inválido. Por favor, teclee un monto válido`);
        return; 
    }
}