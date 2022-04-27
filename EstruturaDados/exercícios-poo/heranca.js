/**
 * Herança Simples - Exemplos
 * 
 * Exercicio 1 - Implemente 1 funcionalidade abstrata para a Pessoa e acesse nas pessoas fisicas e juridicas
 * Execicio 2 - Implemente 1 funcionalidade especifica nas classes de Pessoa Fisica e Pessoa Juridica, para elas.
 */

 class Pessoa {
    constructor(nome, sobrenome, contaCorrente) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.contaCorrente = contaCorrente;
    }
  }
  
  class Pfisica extends Pessoa {
    constructor(nome, sobrenome, contaCorrente, cpf, escolaridade) {
      super(nome, sobrenome, contaCorrente); //usada para acessar o objeto/classe pai
      this.cpf = cpf;
      this.escolaridade = escolaridade;
    }
  
  }
  
  let pessoa = new Pfisica('Maria', 'Ribeiro', '12345-1', '11154545471', 'Ensino Superior');
  console.log(pessoa);
  
  class PJuridica extends Pessoa {
    constructor(nome, sobrenome, contaCorrente, cnpj, razaoSocial) {
      super(nome, sobrenome, contaCorrente);
      this.cnpj = cnpj;
      this.razaoSocial = razaoSocial;
    }
  }
  
  let empresa = new PJuridica('EmpresaFake', 'LTDA', '123456-7','121321321/0001-10', 'FakesEFakes');
  console.log(empresa);