
let cpf ='';
let data ='';
let cep ='';

let exercicio = (cpf, data, cep) => {
    cpf = '11122233344';
    data = '04/07/1997 ';
    cep = '15001-123 ';
    return cpf + data + cep;
}

const regex = /^(111)\.(222)\.(333)\-(44)/gmi

const resultado = cpf.match(regex);

console.log(exercicio(cpf, data, cep));

console.log(regex);

console.log(resultado);

//let alterado = {cpf}.replace(regex);






//console.log(alterado);