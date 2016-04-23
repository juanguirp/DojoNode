var http = require("http");

http.createServer(
  function(request, response){
    console.log("Servidor iniciado...");
    response.write("Hola mundo");
    response.end();
}).listen(8888);
