//yarn add express
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-p05gu.mongodb.net:27017,cluster0-shard-00-01-p05gu.mongodb.net:27017,cluster0-shard-00-02-p05gu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //necessário para funcionamento do JSON

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query Params: na URL, request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração (PUT) ou remoção (DELETE))
// Body: request.body (dados para criação ou alteração de um registro)


//MongoDB (Não-relacional) https://www.mongodb.com/cloud/atlas
//yarn add mongoose

// GET
app.get('/getTest', (request, response) => {  
    const reqQuery = request.query;  
    return response.json({ message: "Get: " + reqQuery.queryTest});
});

// PUT
app.put('/putTest/:id', (request, response) => {
    //const reqPutParams = request.params;    
    //return response.json({ message: "Updated: " + reqPutParams.id});
    //ou
    const { id } = request.params;
    return response.json({ message: "Updated: " + id});
});

// DELETE
app.delete('/deleteTest/:id', (request, response) => {
    const reqDeleteParams = request.params;    
    return response.json({ message: "Deleted: " + reqDeleteParams.id});
});

//POST
app.post('/postTest', (request, response) => {
    const reqBody = request.body;
    const retorno = "O e-mail do " + reqBody.name + " é: " + reqBody.email;
    return response.json({ message: retorno});
});

app.listen(3333);