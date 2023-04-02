const numeroSecreto = Math.floor(Math.random() * 30 + 1);
const tentativas = [];

let jogadaNumero = null;

while (jogadaNumero !== numeroSecreto) {
  const lerJogada = window.prompt("Digite um número entre 1 e 30:");
  const jogada = parseInt(lerJogada);
  
  if (tentativas.includes(jogada)) {
    console.log("Você já tentou esse número. Tente novamente.");
    continue;
  }

  if (jogada > numeroSecreto) {
    console.log("Tente um valor menor");
  } else if (jogada < numeroSecreto) {
    console.log("Tente um valor maior");
  } else {
    console.log("Parabéns! Você acertou o número secreto!");
    break;
  }

  tentativas.push(jogada);
}

console.log("Tentativas:", tentativas);