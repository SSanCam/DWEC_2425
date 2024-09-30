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

/**
 * Funciones definidas por el usuario
 * 
 * El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción if.
 * 
 * condición ? expr1 : expr2
 * si se cumple 'condicion' devuelve expr1, si no se cumple, pasa expr2
 * 
 * 
 * FUNCION COMO ARGUMENTO
 * Las expresiones function se utilizan cuando se necesita pasar una funcion como argumento a otra funcion
 * 
 * const variable = function(num) (return num = nums;)
 * 
 * FUNCIONES CALLBACK
 * 
 * Recursividad, funciones que se llaman a si mismas 
 */