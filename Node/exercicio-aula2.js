let numeroUm = 0;

function soma (numeroUm, numeroDois) {
    let error = 'Erro, o resultado é impar!';
    return new Promise(function(resolve, reject){
    let soma = numeroUm + numeroDois;
    if (soma %2 === 0){
        resolve(`Operação concluída ${console.log(soma)}`);
    }else{
        reject(error);
    }
    });
}
 
async function executar(){
   try { 
    const entrada =  await soma (1, 2);
    console.log ('Operação concluída com sucesso');
    }
    catch (error){
    console.log(error);
    }
}

executar();