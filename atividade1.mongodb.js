// a) Inserir 10 alunos
use('BD3-NoSQL-AtlasMongoDB');

// Inserir 10 alunos
db.getCollection('bd3-nosql-atv1').insertMany([
  { cod_aluno: 1, nome: "João Silva", cpf: "11111111111", rg: "1111111" },
  { cod_aluno: 2, nome: "Maria Souza", cpf: "22222222222", rg: "2222222" },
  { cod_aluno: 3, nome: "Carlos Pereira", cpf: "33333333333", rg: "3333333" },
  { cod_aluno: 4, nome: "Ana Oliveira", cpf: "44444444444", rg: "4444444" },
  { cod_aluno: 5, nome: "Paulo Santos", cpf: "55555555555", rg: "5555555" },
  { cod_aluno: 6, nome: "Juliana Lima", cpf: "66666666666", rg: "6666666" },
  { cod_aluno: 7, nome: "Lucas Almeida", cpf: "77777777777", rg: "7777777" },
  { cod_aluno: 8, nome: "Fernanda Costa", cpf: "88888888888", rg: "8888888" },
  { cod_aluno: 9, nome: "Rafael Gomes", cpf: "99999999999", rg: "9999999" },
  { cod_aluno: 10, nome: "Beatriz Melo", cpf: "10101010101", rg: "1010101" }
]);

// Listar todos os alunos
db.getCollection('bd3-nosql-atv1').find();

// Listar um aluno pelo CPF sem o campo cod_aluno
db.getCollection('bd3-nosql-atv1').find(
  { cpf: "33333333333" },
  { cod_aluno: 0 }
);

// Alterar um aluno
db.getCollection('bd3-nosql-atv1').updateOne(
  { cod_aluno: 5 },
  { $set: { nome: "Paulo Henrique", cpf: "55555555999", rg: "9999999" } }
);

// Excluir um aluno
db.getCollection('bd3-nosql-atv1').deleteOne({ cod_aluno: 10 });

