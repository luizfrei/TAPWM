var http = require('http');

var server = http.createServer(function(req,res){
    var opcao = req.url;
    if(opcao=='/historia'){
        res.end("<html><body>História da Fatec Sorocaba</body></html>");
    }
    else if(opcao=='/cursos'){
        res.end("<html><body>Cursos</body></html>");
    }
    else {
    res.end("<html><body>Professor</body></html>");
}
});
server.listen(3000);