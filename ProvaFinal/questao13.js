const lista = [1, 2, 3, 4, 5, 11, 12, 33, 1014];
let numero = 0;

function ehPrimo (numero){
    for (let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;
        }
        return true;
    }
}
const teste = ehPrimo(7);
console.log('Deveria ser true:', teste);

function saoPrimos (lista) {
    for (let i = 2; i <= lista.length; i++){
        if(lista[i] % i == 0){
            return false;
        }else
           return true;
        }
       
    }


console.log(lista);
const listaInformaSaoPrimos = saoPrimos(lista);
console.log(listaInformaSaoPrimos);
