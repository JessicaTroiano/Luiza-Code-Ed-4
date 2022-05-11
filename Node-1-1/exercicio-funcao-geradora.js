const vendas = 0;
let comissaoGestor;
let comissaoSuper;
let comissaoVendedor;
let funcionario;

let percentualVendedor = (vendas) => {
    return vendas * 0.1;
    
}

let percentualSupervisor = (vendas) => {
    comissaoSuper = vendas * 0.1;
    totalComissaoSuper = comissaoSuper * 0.05;
    return comissaoSuper + totalComissaoSuper;
    
}

let percentualGerente = (vendas) => {
    comissaoGestor = vendas * 0.10;
    totalComissaoGestor = comissaoGestor * 0.10;
    return comissaoGestor + totalComissaoGestor;
    
}

let comissao = (funcionario) => {
    if (funcionario === 'vendedor'){
        return percentualVendedor;
    } else if(funcionario === 'supervisor'){
        return percentualSupervisor;
    } else {
        return percentualGerente;
    }
}

console.log(percentualVendedor(1500));
console.log(percentualSupervisor(1500));
console.log(percentualGerente(1500));
