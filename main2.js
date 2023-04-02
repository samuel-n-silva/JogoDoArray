const numeroSecreto = Math.floor(Math.random() * 30 + 1);
let tentativas = [];
let tentativaAtual = 0;
info = true;

console.log('Numero Secreto :' +numeroSecreto);

function jogarGame(){
    let tentativa = window.prompt("Qual sua tentativa");
    tentativaAtual = parseInt(tentativa);
    numeroTentativas = tentativas.length + 1;

    tentativas.push(tentativaAtual);

    console.log(`Tentativa Atual: ${tentativaAtual}, Qt.Tentativas: ${numeroTentativas}`)
    console.log('Tentativas :' + tentativas);
}


