let listaProdutos = ['geladeira','fogão','coifa'];
let listaMaiuscula = listaProdutos.map(primeiraMaiuscula);

function primeiraMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase()+elemento.slice(2);
}

console.log ('Array original: ' + listaProdutos);
console.log ('Array rertornado pelo método map() : '+ listaMaiuscula);