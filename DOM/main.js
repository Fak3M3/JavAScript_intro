function toogleTheme(){
    //cambiar entre claro y obscuro
    document.body.classList.toggle("dark-mode");
    //obtiene el tema actual
    let button = document.querySelector(".theme-toggle");
    //cambio el texto según el tema
    button.textContent = document.body.classList.contains("dark-mode")
    // operadores ternarios
   ? "☀️ Modo Claro" //if
   : "🌙 Modo Oscuro"; // else
}

// muestra y oculta el menu de navegación

function toogleMenu(){
    // alterna la clase active con el menú de navegacioó para mostrar y ocultar
    document.getElementById("menu").classList.toggle("active");
}


function validateForm(){
    let nombre = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    document.getElementById("error-nombre").textContent = nombre;
    // operadores ternarios
    ? "☀️ Modo Claro"
    : "☠️ Nombre requerido"
    document.getElementById("error-nombre").textContent = email;
    ? ""
    :"☠️ Nombre requerido"
    document.getElementById("error-nombre").textContent = mensaje;
    ? ""
    : "☠️ Nombre requerido"

    if(nombre && email.includes ("@") && mensaje){
        alert("Mensaje enviado")
    }   
}