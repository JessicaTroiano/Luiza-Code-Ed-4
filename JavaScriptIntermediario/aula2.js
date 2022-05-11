
//Exercício 1
let valor = 3;

let par = (_) => {
    if (valor %2 === 0){
        return 'o valor é par';
    }else{
        return 'o valor é impar';
    }
}

// Exercício 2
console.log(par());

let numberOne = 5;
let numberTwo = 7;

let soma = (numberOne, numberTwo) => numberOne + numberTwo;

console.log(soma(numberOne, numberTwo));

// Exercício 3

let cumprimento = true;
let aux = 0;

let retorno = () => {
    aux = cumprimento === true ? 'Está feliz' : 'Está triste!';
    return aux;
}

console.log(retorno());