/*
Sacar un número aleatorio entre 1-1000 simulando un min y un max.
*/
let min = 10 ;
let max = 20 ;

let random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);
/*
let max = 5 ;
console.log(Math.floor(Math.random() * max));
*/