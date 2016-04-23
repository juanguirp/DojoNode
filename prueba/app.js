var http = require("http");
var modulo = require("./modulo");
var s = modulo.suma(5, 5);

http.createServer(
  function(request, response){
    console.log("Servidor iniciado...");
    response.write("Hola mundo\n");
    response.write("Suma " + s);
    response.end();
}).listen(8888);
