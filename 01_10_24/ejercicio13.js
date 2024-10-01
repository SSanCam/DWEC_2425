/*
crea el objeto calculator con tres metodos
    read() pide dos valores y los almacena como propiedades del objeto
    sum() devuelve la suma de los valores almacenados
    mul() multiplica los valores almacenados y devuelve el resultado
*/

let calculator = {

    // metodos del objeto, se separan usando ','

    read: function (){
        // usando + delante de este promt lo convierte en numero, pordira usarse isNaN
        this.num1 = + promt("Introduce un numero: ")
        this.num2 = + promt("Introduce otro numero: ")
        return num1, num2
    },

    suma: function(){
        return this.num1 + this.num2
    },

    mul: function() {
        return this.num1 * this.num2
    }

}