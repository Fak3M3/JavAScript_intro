const userName = window.prompt("BIENVENIDO INGRESA TU NOMBRE");
let saldo = 1000;
let retiro;
 seguir = true;

do {
  let entrada = prompt(`Hola ${userName}, tu saldo es: $${saldo}. Ingresa la cantidad a retirar:`);

  if (entrada !== null && entrada !== "") {
    retiro = parseInt(entrada);

    if (retiro <= saldo && retiro > 0) {
      saldo = saldo - retiro;
      console.log(`Retiro exitoso, ${userName}. Saliendo de la app.`);
    } else {
      console.log(`Fondos insuficientes, ${userName}. Saliendo de la app.`);
    }

    seguir = false; 
  } else {
    console.log(`No ingresaste una cantidad, ${userName}. Saliendo de la app.`);
    seguir = false;
  }

} while (seguir);
