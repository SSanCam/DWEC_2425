/*
Sigue los siguientes pasos:
1- Crea un objeto user vacio
2. agrega la propiedad name con el valor Will
3. agrega la propiedad surname con el valor Smith
4. cambia el valor name a John 
5. elimina la propiedad name del objeto
*/

let user = {}

user.name("Will")
user.surname("Smith")

user.name = "John"

delete user.name

console.log(user)