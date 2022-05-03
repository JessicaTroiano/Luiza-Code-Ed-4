// // Exercício Proposto - transformar o código comentado abaixo em callback.
// let valorSoma1 = 10;
// let valorSoma2 = 20;

// let soma = valorSoma1 + valorSoma2;
// console.log(`O resultado da soma foi: ${soma}`);

// //
// let valorMulti1 = 50;
// let valorMulti2 = 2;

// let multiplicacao = valorMulti1 * valorMulti2;
// alert(`O resultado da multiplicação foi: ${multiplicacao}`);

let resultado;

function exibirConsole(resultado){
    console.log(`O resultado da soma foi: ${resultado}`);
}

function exibirAlerta(resultado){
    alert(`O resultado da multiplicação foi: ${resultado}`);
}


function realizarOperacao(valorUm, valorDois, Callback){
    if (Callback === exibirConsole){
        resultado = valorUm + valorDois;
    }else{ Callback === exibirAlerta;
        resultado = valorUm * valorDois;
    }
    
    Callback(resultado);

}

realizarOperacao(10, 20, exibirConsole);
realizarOperacao(50, 2, exibirAlerta);