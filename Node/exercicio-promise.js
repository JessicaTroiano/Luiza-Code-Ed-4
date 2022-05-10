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

async function calculo(){
    const entrada = 1500;
    const saida = await Promise.resolve(entrada)
        //.then(percentualVendedor)}
        //.then(percentualSupervisor)
        .then(percentualGerente)

        console.log ('>>>', saida);

}

calculo();