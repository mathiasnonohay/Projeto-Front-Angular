export class Cadastro {

  constructor(nome: string, email: string,  senha: string) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  nome: string;
  email: string;
  senha: string;
}
