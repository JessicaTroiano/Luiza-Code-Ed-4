//Computador Atributos: Marca Modelo SO Cor Processador Memória Armazenamento Preço
//Funcionalidades: Programar Estudar Pesquisar Desenhar Assistir Ouvir Música Reunir Trabalhar

class Notebook {
    constructor (marca, modelo, so, cor, processador, memoria, preco){
        this.marca = marca;
        this.modelo = modelo;
        this.so = so;
        this.cor = cor;
        this.processador = processador;
        this.memoria = memoria;
        this.preco = preco;
    }
}

let note = new Notebook ('dell', 'vostro', 'linux', 'preto', 'core i7', '16gb', '2000');
console.log(note);