/*
Escribe una funcion pow(b,e) la cual recibe dos numeros enteros b y e, siendo b la base y e el exponente
y devuelva b
*/
function pow(b, e) {
    
    let total = 0

    for(i = 1; i <= e; i++){
        total *= b;
    }
    return total;
}