// const temDinheiro = true;
// const estaChovendo = false;

// if(temDinheiro && !estaChovendo){
//     console.log('eu vou viajar')
// }else{
//     console.log('eu não vou viajar')
// }

// nesse caso as duas condições precisam estar true ou false para que a pessoa possa viajar. 

// var carrinhoCompras = [
//     {id: 1, nome: 'bicicleta', valor:100 },
//     {id: 2, nome: 'moto', valor: 3000}
// ]

// carrinhoCompras.forEach((item, index) => {
//     console.log(item);
//     console.log(index);
//     console.log('-----------');
// })


// let numero = 51;
// let resultado = null;

// if (numero % 2 === 0){
//     resultado = 'O número é par'
// }else{
//     resultado = 'O número é impar'
// }

// console.log(resultado);

// let venda = 900;
// let comissao = null;

// if (venda <= 1000){
//     comissao = '20 reais';
// }else if (venda > 1000 && venda <= 2000){
//     comissao = '50 reais';
// } else {
//     comissao = '100 reais';
// }

// console.log(comissao);


// const array = [1, 2, 3, 4, 5, 6];
// let contarPar = 0;

// for (let i = 0; i <= array.length; i++){
//     if (array[i] % 2 === 0){
//         contarPar++
//     }
// }

// console.log(contarPar);

// let i = 0;
// let contarPar = 0;
// const array = [1, 2, 3, 4, 5, 6];

// do {
//     if(array[i] % 2 === 0){
//         contarPar++
//     }
//     i++

// } while (i < array.length);

// console.log(contarPar);


// while (i < array.length){
//     if(array[i] % 2 === 0){
//         contarPar++
//     }
//     i++
// }
// console.log(contarPar);

// function valorComissao (tipoVendedor, valorVenda){
//     if (tipoVendedor === 'vendedor'){
//         return valorVenda * 0,10;
//     }
// }


// function executar () {
//     const tipoVendedor = 'vendedor';
//     const valorVenda = 1000;
//     let comissao = valorComissao (tipoVendedor, valorVenda);
//     console.log('Valor comissao é: ', comissao);
// }

// executar();

// function executar(){
//     const inc1 = geradorInc(1);
//     const inc2 = geradorInc(2);
//     console.log(inc1(1));
//     console.log(inc2(1))
// }

// function geradorInc(base){
//     return function (valor){
//         return valor + base;
//     }

// }

// executar();


const registroCSV = (
    'secador cabelo, a123\n'+
    'myphone, mf4-444\n'
)

const registroJSON = (
    '[{"nome": "secador cabelo", "código": "a123"}, \n'
     //'{"nome": "myphone", "código": "mf4-444"}, \n'
)

function executar (){
    const registroCSV = lerRegistroCSV()
    const registros = transformarEmRegistros(registroCSV)
    const registroJSON = transformarEmJSON(registros)
    console.log(registroJSON)
}










