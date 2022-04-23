//Encapsulamento

class Pessoa {
    constructor (idade){
        this.idade = idade;
    }
    atribuiIdade (idade){
        this.idade = idade;
    }
    _verificaIdade(){
        if (this.idade > 18){
            console.log('Maior de Idade');
        }else{
            console.log('Menor de Idade');
        }
    }
    }

let pessoa = new Pessoa (34);
console.log(pessoa);