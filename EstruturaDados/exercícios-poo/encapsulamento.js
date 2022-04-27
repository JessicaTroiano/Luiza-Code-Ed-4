/**
 * Encapsulamento - Exemplo
 * Exercicio 1 - Quero que vocês pesquisem sobre modos de encapsular atributos (#) e tente fazer isso na Pessoa
 */
 class Pessoa {

    #nome;
    #idade;
    #documento;
    #cidade;
    #estado;

    constructor(nome, idade, documento, cidade, estado) {
      this.#nome = nome;
      this.#idade = idade;
      this.#documento = documento;
      this.#cidade = cidade;
      this.#estado = estado;
    }
    get nome(){
        return this.#nome;
    }

    set nome(nome){
        return this.#nome;
    }

    get idade(){
        return this.#idade;
    }

    set idade(idade){
        return this.#idade;
    }

    get documento(){
        return this.#documento;
    }

    set documento(documento){
        return this.#documento;
    }
    get cidade(){
        return this.#cidade;
    }

    set cidade(cidade){
        return this.#cidade;
    }
    get estado(){
        return this.#estado;
    }

    set estado(estado){
        return this.#estado;
    }
}
  
    let pessoa = new Pessoa('Jéssica ', 30, '123456789', 'Matão', 'São Paulo' );
    console.log(pessoa.nome);
    console.log(pessoa.idade);
    console.log(pessoa.documento);
    console.log(pessoa.cidade);
    console.log(pessoa.estado);