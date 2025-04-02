const userName = window.prompt("ALOO, ¿CUAL ES TU NOMBRE?");

function triangulo(lad1, lad2, lad3){
    if (lad1 == lad2 && lad1 == lad3){
        return console.log(`Tu triangulo es EQUILATERO ${userName}`);
    }else if(lad1 === lad2 || lad2 === lad3 || lad1 === lad3){
        return console.log(`Tu triangulo es ISOCELES ${userName}`);
    }else {
        return console.log(`Tu triangulo es ESCALENO ${userName}`);
    }
}
