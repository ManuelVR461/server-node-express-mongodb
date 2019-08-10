const mongoose = require('mongoose');

const URI = 'mongodb://localhost/dbnombre';

mongoose.connect(URI, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Base de Datos Conectado');
});


module.exports = mongoose;