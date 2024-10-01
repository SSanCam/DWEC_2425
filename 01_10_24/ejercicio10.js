/*
escribe una funcion isEmpty() que devuelva true si el objeto no 
tiene propiedades o es false si al menos tiene una propiedad
*/

let user = {}

user.name("Will")
user.surname("Smith")

user.name = "John"

delete user.name

// console.log(user)


function isEmpty(obj) {
    /*
        if (user.noSuchProperty){
            return true
        } else {
            return false
        }
    */
        if (obj.isEmpty){
            return true
           } else {
            return false
           }

    // Forma mas corta, devuelve true si la longitud es 0 (no tiene keys) false en caso contrario
   // -> return Object.keys(obj).length === 0

}

console.log(isEmpty(user))