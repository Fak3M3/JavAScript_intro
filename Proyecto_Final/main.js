// Datos de las cuentas
let cuentas = [
    { nombre: "Lucia", saldo: 1000, password: "GTA58", historial: [], intentosFallidos: 0 },
    { nombre: "Tatiana", saldo: 500, password: "TOTI96", historial: [], intentosFallidos: 0 },
    { nombre: "Reynathan", saldo: 20, password: "RNN19", historial: [], intentosFallidos: 0 }
];

let cuentaSeleccionada = null;


/**
 * The function `selectAccount` retrieves the selected account from a dropdown menu and displays the
 * password screen if the account exists.
 */
function selectAccount() {
    const nombreCuenta = document.getElementById('account-select').value;
    cuentaSeleccionada = cuentas.find(cuenta => cuenta.nombre === nombreCuenta);
    cuentaSeleccionada ? (document.getElementById('selection-screen').style.display = 'none', document.getElementById('password-screen').style.display = 'block') : null;
}

/**
 * The function `checkPassword` compares the input password with a stored password and displays
 * different screens based on the comparison result, with a limit on failed attempts before potentially
 * blocking the account.
 */

function checkPassword() {
    const password = document.getElementById('password').value;
    password === cuentaSeleccionada.password 
        ? (document.getElementById('password-screen').style.display = 'none', document.getElementById('options-screen').style.display = 'block', document.getElementById('back-to-menu').style.display = 'inline-block')
        : (cuentaSeleccionada.intentosFallidos++, document.getElementById('error-message').style.display = 'block', cuentaSeleccionada.intentosFallidos >= 4 ? (alert("Has excedido el número de intentos fallidos. Tu cuenta ha sido bloqueada."), document.getElementById('options-screen').style.display = 'none') : null);
}


/**
 * The function `getSaldo` hides other sections and displays only the current balance in a banking
 * application.
 */
function getSaldo() {
    // Ocultar 
    document.getElementById('ingreso-display').style.display = 'none';
    document.getElementById('retiro-display').style.display = 'none';
    document.getElementById('historial-display').style.display = 'none';
    document.getElementById('transaction-message').style.display = 'none'; // Ocultar el mensaje de transacción
    // Mostrar la sección de saldo
    document.getElementById('saldo-display').style.display = 'block';
    document.getElementById('current-saldo').textContent = cuentaSeleccionada.saldo; // Solo muestra el saldo actual
}


/**
 * The function "ingresarMonto" hides elements related to balance and transaction history, and displays
 * the input section for entering an amount.
 */
function ingresarMonto() {
    // Ocultar 
    document.getElementById('saldo-display').style.display = 'none';
    document.getElementById('historial-display').style.display = 'none';
    document.getElementById('transaction-message').style.display = 'none'; // Ocultar el mensaje de transacción
    document.getElementById('retiro-display').style.display = 'none';
    // Mostrar la sección de ingreso
    document.getElementById('ingreso-display').style.display = 'block';
}


/**
 * The function `confirmarIngreso()` validates and processes a deposit transaction within certain
 * constraints for a selected account.
 * @returns The `confirmarIngreso` function is returning different values based on certain conditions:
 */
function confirmarIngreso() {
    let monto = parseFloat(document.getElementById('monto-ingreso').value);

    return isNaN(monto) || monto <= 0
        ? alert("Monto inválido. Por favor, ingresa un monto válido.")
        : cuentaSeleccionada.saldo + monto > 1000
        ? (alert("El saldo no puede exceder los $1000. La operación no se ah acompletado."),
            document.getElementById('transaction-message').style.display = 'none') // No mostrar monto transaccionado si excede el límite
        : (cuentaSeleccionada.saldo += monto, cuentaSeleccionada.historial.push(`Depósito de $${monto}`), 
            document.getElementById('transaction-message').style.display = 'block',
            document.getElementById('message-text').textContent = `${cuentaSeleccionada.nombre}  has depositado $${monto}. Tu saldo actual es: $${cuentaSeleccionada.saldo}`,
             // Oculta la sección de ingreso
            document.getElementById('ingreso-display').style.display = 'none'
        );
}


/**
 * The function "retirarMonto" hides elements related to balance, transaction history, and messages,
 * while displaying the withdrawal section.
 */
function retirarMonto() {
    // Oculta
    document.getElementById('saldo-display').style.display = 'none';
    document.getElementById('historial-display').style.display = 'none';
    document.getElementById('transaction-message').style.display = 'none'; 
    document.getElementById('ingreso-display').style.display = 'none';
    // Mostrar la sección de retiro
    document.getElementById('retiro-display').style.display = 'block';
}


/**
 * The `confirmarRetiro` function validates a withdrawal amount and updates the account balance and
 * transaction history accordingly, displaying messages based on certain conditions.
 * @returns The `confirmarRetiro` function is returning either an alert message if the conditions for a
 * valid withdrawal are not met, or it is updating the account balance and transaction history if the
 * withdrawal is valid.
 */
function confirmarRetiro() {
    let monto = parseFloat(document.getElementById('monto-retiro').value);
    return isNaN(monto) || monto <= 0
        ? alert("Monto inválido. Por favor, ingresa una cantidad válida.")
        : cuentaSeleccionada.saldo - monto <= 10
        ? alert("No puedes retirar esa cantidad. El saldo debe ser mayor a $10.")
        : cuentaSeleccionada.saldo - monto >= 990
        ? alert("No puedes retirar esa cantidad. El saldo no debe superar los $990.")
        : (cuentaSeleccionada.saldo -= monto, cuentaSeleccionada.historial.push(`Retiro de $${monto}`), 
            document.getElementById('transaction-message').style.display = 'block',
            document.getElementById('message-text').textContent = `${cuentaSeleccionada.nombre} has retirado $${monto}. Tu saldo actual es: $${cuentaSeleccionada.saldo}`,
            // Oculta la sección de retiro
            document.getElementById('retiro-display').style.display = 'none' 
        );
}

/**
 * The function "mostrarHistorial" hides unnecessary actions and displays the transaction history in a
 * list format on a webpage.
 */
function mostrarHistorial() {
    // Oculta
    document.getElementById('saldo-display').style.display = 'none';
    document.getElementById('ingreso-display').style.display = 'none';
    document.getElementById('retiro-display').style.display = 'none';
    document.getElementById('transaction-message').style.display = 'none'
    // Muestra la pantalla de historial
    document.getElementById('historial-display').style.display = 'block';
    let historialHtml = cuentaSeleccionada.historial.map(transaccion => `<li>${transaccion}</li>`).join('');
    document.getElementById('historial-list').innerHTML = historialHtml;
}


/**
 * The function "salir" displays a thank you message, hides certain elements on the screen, and returns
 * to the selection screen in a banking application.
 */
function salir() {
    alert("Gracias por usar el banco del bienestar, ¡vuelva pronto!");
    // Oculta
    document.getElementById('options-screen').style.display = 'none';
     
    document.getElementById('saldo-display').style.display = 'none'; 
    document.getElementById('historial-display').style.display = 'none';
    // Muestra la pantalla de seleción
    document.getElementById('selection-screen').style.display = 'block'; 
    
}


