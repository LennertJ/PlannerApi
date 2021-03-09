const express = require('express');
const router = require('./routes.js');
const mongoose = require('mongoose');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json());

app.use(function(req,res,next){//CORS fix
    res.setHeader('Acces-Control-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers,Authorization, X-Requeste-With');
    next();
})

app.use(router);

app.listen(2000, () => {
    console.log("Server is running on port http://localhost:2000/.");
  });