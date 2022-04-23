let listaNum = [1,2,3,4,5];
let indexElemento = 0;

//console.log(listaNum.length);

//console.log(listaNum.pop()); // remove o último elemento;

//console.log(listaNum.push(6)); // add um elemento no fim da lista;

//console.log(listaNum.shift()); // remove o primeiro elemento;

//console.log(listaNum.unshift(0));// add um elemento no inicio da lista;

//indexElemento = listaNum.indexOf(1); // mostra a posição do elemento no array;
//console.log(indexElemento);

listaNum.splice(indexElemento, 4);

console.log("Lista: "+listaNum);