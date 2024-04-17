let respostas = [];
 
function adicionarResposta() {
const idade = parseInt(document.getElementById("idade").value);
const sexo = document.querySelector('input[name="sexo"]:checked').value;
const opiniao = parseInt(document.getElementById("opiniao").value);
 
respostas.push({ idade, sexo, opiniao });
 
calcularEExibirResultados();
}
 
function calcularEExibirResultados() {
const idades = respostas.map(resposta => resposta.idade);
const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
 
const mediaIdade = somaIdades / respostas.length;
document.getElementById("mediaIdade").textContent = mediaIdade;
 
const idadeMaisVelha = Math.max(...idades);
document.getElementById("idadeMaisVelha").textContent = idadeMaisVelha;
 
const idadeMaisNova = Math.min(...idades);
document.getElementById("idadeMaisNova").textContent = idadeMaisNova;
 
const qtdPessimo = respostas.filter(resposta => resposta.opiniao === 1).length;
document.getElementById("qtdPessimo").textContent = qtdPessimo;
 
const qtdOtimoBom = respostas.filter(resposta => resposta.opiniao >= 3).length;
const porcentagemOtimoBom = (qtdOtimoBom / respostas.length) * 100;
document.getElementById("porcentagemOtimoBom").textContent = porcentagemOtimoBom;
 
const qtdMulheres = respostas.filter(resposta => resposta.sexo === "feminino").length;
document.getElementById("qtdMulheres").textContent = qtdMulheres;
 
const qtdHomens = respostas.filter(resposta => resposta.sexo === "masculino").length;
document.getElementById("qtdHomens").textContent = qtdHomens;
}