//yarn add express
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json()); //necessário para funcionamento do JSON
app.use(routes);

app.listen(3333);