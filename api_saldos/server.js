console.log('Inició el mini api');

var express = require('express');
var app = express();

var  PUERTO = 3777;

app.listen(PUERTO, function(){
  console.log('Puerto: ' + PUERTO + ' abierto');
});

app.get('/',
  function(req, res){
    res.send('Bienvenido a la mini api de saldos');
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/postPrueba',
  function(req, res){
    console.log(req.body);
    res.send('OK');
  });
