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

    //MONTO SOLICITADO ES MENOR O IGUAL AL SALDO DISPONIBLE
    if(monto <= saldo){
        //actualizamos saldo
        saldo -= monto;
        //actualizo el historial
        historial.push(`Retiro de $${monto}`);
        console.log(`Transacción exitosa. Has retirado $${monto}, tu nuevo saldo es: $${saldo} `);
        alert(`Transacción exitos. Has retirado $${monto},tu nuevo saldo es: $${saldo}`);
    // reinicia intentos fallidos
        intentoFallido = 0;
    }else{
        console.log("Operación NO REALIZADA, saldo insuciente 🚨😞");
        alert("Operación NO REALIZADA, saldo insuciente 🚨😞");
        intentoFallido++;
    }
};

//funcion depositar

function depositoSaldo(){
    let monto =parseFloat(prompt("¿Cuanto desea depositar?"));
    
    // verificando que sea valido
    if(isNaN(monto) || monto <= 0){
        alert(`Monto inválido. Por favor, teclee un monto válido`);
        return; 
    }
    //actualizamos saldo
    saldo += monto;
    //actualizo el historial
    historial.push(`Deposito de $${monto}`);
    console.log(`Operación exitosa. Has depositado $${monto}, tu nuevo saldo es: $${saldo} `);
    alert(`Operación exitos. Has depositado $${monto},tu nuevo saldo es: $${saldo}`);
    
};

// menú interactivo 
function menu(){
    let opc;
    do{
        // se mostrara al user el menú de opciones
        opc = prompt("Bienvenido al banco del bienestar, elige una opción \n" + 
            "1. Consulta tu saldo \n"+
            "2. Realizar un retiro \n"+
            "3. Realizar un depósito \n"+
            "4. Salir \n"
        );
        switch(opc){
            case "1":
                getSaldo();
                break;
            case "2":
                retirarSaldo();
                break;
            case "3":
                depositoSaldo();
                break;
            case "4":
                console.log("Gracias por usar el banco del bienestar, ¡vuelva pronto¡ 🌝");
                alert("Gracias por usar el banco del bienestar, ¡vuelva pronto¡ 🌝");
                break;
                default:
                    alert("Opción invalida, por favor tecleé algo del menú 😟")
        }
    }while(opc !== "5");
    
};
