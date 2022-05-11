const vendas = 0;
let comissaoGestor;
let comissaoSuper;
let comissaoVendedor;
let funcionario;

function comissao (funcionario){
    if (funcionario === 'vendedor'){
            function calculoComissaoVendedor(vendas){
                return vendas * 0.10;
    }

            return calculoComissaoVendedor;

    } else if (funcionario === 'supervisor'){
            function calculoComissaoSupervisor(vendas){
                comissaoSuper = vendas * 0.1;
                totalComissaoSuper = comissaoSuper * 0.05;
                return comissaoSuper + totalComissaoSuper;
    }
        return calculoComissaoSupervisor;
    }else{
            function calculoComissaoGestor(vendas){
                comissaoGestor = vendas * 0.10;
                totalComissaoGestor = comissaoGestor * 0.10;
                return comissaoGestor + totalComissaoGestor;
            }
        
            return calculoComissaoGestor;
    }
}

const calcular = comissao ('gerente');
const vender = calcular (1500);
console.log ('comissão ' + vender);