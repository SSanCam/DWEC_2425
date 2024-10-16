function darCarnet (edad, estudiante){

    if (edad < 16 || edad > 120){
        alert("Edad no válida.");
    } else if (estudiante){
        return "Estudiante : carnet de estudiante";
    } else {
        if (edad <= 25){
            return "16-25: Carnet joven."
        }
        if (edad <= 65){
            return "26-65: sin carnet."
        }
        if (edad <= 120) {
            return "66-120: carnet de la tercera edad."
        }

    }
   
}

console.log(darCarnet(25, true));
console.log(darCarnet(65, true));
console.log(darCarnet(80, false));
console.log(darCarnet(25, true));
console.log(darCarnet(225, true));




