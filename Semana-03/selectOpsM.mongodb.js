const database = 'BDAula1';
const collection = 'LIVRARIA';
use(database);
db.createCollection(collection)

// SELECIONA DOCUMENTOS COM USO DO OPERADOR MAIOR $GT
//db['LIVRARIA'].find({valor:{$gt:100}});

//SELECIONA DOCUMENTOS COM USO DO OPERADOR MENOR $LT
//db['LIVRARIA'].find({valor:{$lt:100}});

//SELECIONA DOCUMENTOS COM intervalo de valores
//db['LIVRARIA'].find({valor:{$gte:100, $lte:150}})
//                .sort({valor:-1})