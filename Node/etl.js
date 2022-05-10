const fs  = require("fs")

function lerRegistroCSV() {
    const registroCSV = (
        nomeArquivo = './arquivoteste.csv'
    )
    return registroCSV
}
function transformarCsvEmRegistro(linhaCSV) {
    const informacoes = linhaCSV.split(',')
    // const [nome , codigo] = informacoes
    const nomeCsv = informacoes[0]
    const codigoCsv = informacoes[1]
    const registro = {
        nome: nomeCsv,
        codigo: codigoCsv
    }
    return registro
}
function transformarEmRegistros(registrosCSV) {
    const listaRegistrosCSV = registrosCSV.split('\n')
    const listaRegistros = []
    for (let i= 0; i < listaRegistrosCSV.length; i++) {
        const linhaCSV = listaRegistrosCSV[i]
        if (!linhaCSV) {
            continue
        }
        const registro = transformarCsvEmRegistro(linhaCSV)
        listaRegistros.push(registro)
    }
    return listaRegistros
}
function transformarEmJSON(registros) {
    return JSON.stringify(registros)
}

function informarAposSalvar(erro){
    console.log('gravou?', erro)
}
// Pegar o registro CSV e transformá-lo em um registro JSON
function executar() {
    const registroCSV = lerRegistroCSV()
    const registros = transformarEmRegistros(registroCSV)
    const registroJSON = transformarEmJSON(registros)
    console.log(registroJSON)
    fs.writeFile(nomeArquivo, registros, informarAposSalvar)
}
executar()