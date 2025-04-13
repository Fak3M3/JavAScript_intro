// Variables para acceder a los elementos del DOM
const passwordOutput = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const copyButton = document.getElementById('copyButton');

const includeUpper = document.getElementById('includeUpper');
const includeLower = document.getElementById('includeLower');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

// Función para generar la contraseña
function generatePassword() {
    const length = lengthSlider.value;
    const charSet = getCharSet();

    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    passwordOutput.value = password;
}

// Función para obtener el conjunto de caracteres según las opciones seleccionadas
function getCharSet() {
    let charSet = '';
    if (includeUpper.checked) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower.checked) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers.checked) charSet += '0123456789';
    if (includeSymbols.checked) charSet += '!@#$%^&*()-_=+[]{}|;:,.<>?';

    return charSet;
}

// Función para copiar la contraseña al portapapeles
function copyToClipboard() {
    passwordOutput.select();
    document.execCommand('copy');
}

// Eventos
generateBtn.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
lengthSlider.addEventListener('input', function () {
    lengthValue.textContent = lengthSlider.value;
});
