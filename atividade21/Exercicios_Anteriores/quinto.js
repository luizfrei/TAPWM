var eventos = require('events');
//atribuição da classe EventEmiiter a uma varialvel
var EmissorEventos = eventos.EventEmitter; // criação de uma instancia do eventEmmiter
var ee = new EmissorEventos();
ee.on('dados', function(fecha){
    console.log(fecha);
});

//emissão do evento a cada 500 milissegundos 
setInterval(function(){
    ee.emit('dados', Date.now());
},500);