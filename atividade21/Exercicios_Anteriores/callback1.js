const prompt = require('prompt-sync')();
//não esquecer de instalar
// npm install pronpty-sync
function saudacao(nome){
    console.log('OI' +nome);

}

function entradaNome(callback){
    var nome = prompt('Digite seu Nome:');
    callback(nome);

}
 entradaNome(saudacao);