
const alumn = window.prompt("Nombre del alumno a calificar");

if (!alumn){
    console.log("No ingresaste el nombre del alumno.");
} else {
    let nota = parseInt(window.prompt("¿Cuanto saco en el examen en una escala de 0 a 100?"));
    if(nota >= 90){
        console.log(`EXCELENTE,  ${alumn} eres increible`);
    }else if(nota >=75){
        console.log(`Bien,  ${alumn} no vas tan mal`)
    }else if(nota >=60){
        console.log(`Suficiente, ${alumn} necesitas mejorar`)
    }else{
        console.log(`REPROBADO, ${alumn} eres bien wey estudia más`)
    }
}