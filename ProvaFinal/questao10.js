function testarLaco(entrada){
    var soma = 1;
    var varI = 1;
    while (entrada >= 0){
        if (varI  % 3 === 0){
            continue
        }
        if (varI % 4 === 0){
            break
        }
        soma += 1;
        entrada--;
    }
    return soma;
}

console.log(soma);