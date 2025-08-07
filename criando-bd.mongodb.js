/* CRIAÇÃO DA CONSTÂNTE QUE REPRESENTA O NOME DO BANCO DE DADOS. */
const database='BD3-AULA';

/* CRIAÇÃO DA CONSTÂNTE QUE REPRESENTA O NOME DA COLEÇÃO DE ARQUIVOS. */
const collection='LIVRARIA';

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO. */
use(database);

/*CRIA UMA  COLEÇÃO DE DADOS:  */
db.createCollection(collection);

