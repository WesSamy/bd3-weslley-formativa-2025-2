const database = 'BDAula1';
const collection = 'LIVRARIA';
use(database);
db.createCollection(collection)

//Selecionam arquivos que contenham uma incidencia especifica de texto
db['LIVRARIA'].find({"descricao": /Robôs/i});