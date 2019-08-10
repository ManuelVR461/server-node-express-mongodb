const express = require('express');
const app = express();
const morgan = require('morgan') ;
const { mongoose } = require('./database');

//CONFIG
app.set('PORT',process.env.PORT || 3000);

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

app.listen(app.get('PORT'),()=>{
    console.log(`server iniciado desde el puerto ${app.get('PORT')}`);
});