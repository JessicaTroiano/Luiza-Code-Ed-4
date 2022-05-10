// para ler um arquivo!

const fs = require ('fs');
const nomeArquivo = './aula-online.json';


function processarArquivo (erro, dado){
    if (erro){
        console.error('deu ruim', erro)
        return
    }
    console.log('Sucesso! Eis o arquivo...')
    const configuracao = JSON.parse(dado)
    console.log(configuracao)
}

fs.readFile(nomeArquivo, processarArquivo);