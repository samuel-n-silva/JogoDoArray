const jogada = document.querySelector('#_jogo');
const jogar = document.querySelector('#_jogar');
const info = document.querySelector('#_info');
const jogadas = document.querySelector('#_jogadas');
const resultado = document.querySelector('#_resultado');
const numeroSecreto = Math.floor(Math.random() * 30 + 1);

let tentativas = [];

function clear(){
    jogada.value = '';
}

function jogarGame() {
    const jogadaNumero = parseInt(jogada.value);
    clear();

    if (jogadaNumero > 0) {
        tentativas.push(jogadaNumero);
        jogadas.innerHTML = tentativas;
    }

    if (jogadaNumero > numeroSecreto)  {
        info.textContent = 'Tente um Valor Menor';
    } else if(jogadaNumero < numeroSecreto) {
        info.textContent = 'Tente um Valor Maior';
    }else if(jogadaNumero == numeroSecreto) {
        resultado.textContent = 'Parabéns !!'
        info.textContent = '';
        jogadas.innerHTML = '';
    }

    if (tentativas.length > 5) {
        let removed = tentativas.splice(0, 1);
        return removed;
    }

    // console.log(numeroSecreto,jogadaNumero,tentativas);
}