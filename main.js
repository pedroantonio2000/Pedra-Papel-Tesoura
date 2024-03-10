const minhaPontuacao = document.querySelector('.myScore');
const pontuacaoComputador = document.querySelector('.computerScore');
const pedra = document.querySelector('#pedra');
const papel = document.querySelector('#papel');
const tesoura = document.querySelector('#tesoura');
const idPedra = document.querySelector('#idPedra');
const idStone = document.querySelector('#idStone');
const idPapel = document.querySelector('#idPapel');
const idPaper = document.querySelector('#idPaper');
const idTesoura = document.querySelector('#idTesoura');
const idScissors = document.querySelector('#idScissors');


const op = ['pedra', 'papel', 'tesoura'];
let pontuacaoDoJogador = 1;
let pontuacaoDoComputador = 1;

pedra.addEventListener('click', () => jogar('pedra'));
papel.addEventListener('click', () => jogar('papel'));
tesoura.addEventListener('click', () => jogar('tesoura'));

function jogar(minhaJogada) {
    const jogarComputador = op[aleatorio()];

    if(!idPapel.classList.contains('none') && !idStone.classList.contains('none')) {
        idPapel.classList.add('none');
        idStone.classList.add('none');
    } else if(!idPapel.classList.contains('none') && !idScissors.classList.contains('none')) {
        idPapel.classList.add('none');
        idScissors.classList.add('none');
    } else if(!idPedra.classList.contains('none') && !idPaper.classList.contains('none')) {
        idPedra.classList.add('none');
        idPaper.classList.add('none');

    } else if(!idPedra.classList.contains('none') && !idScissors.classList.contains('none')) {
        idPedra.classList.add('none');
        idScissors.classList.add('none');

    } else if(!idTesoura.classList.contains('none') && !idStone.classList.contains('none')) {
        idTesoura.classList.add('none');
        idStone.classList.add('none');

    } else if(!idTesoura.classList.contains('none') && !idPaper.classList.contains('none')) {
        idTesoura.classList.add('none');
        idPaper.classList.add('none');

    } else if(!idTesoura.classList.contains('none') && !idScissors.classList.contains('none')) {
        idTesoura.classList.add('none');
        idScissors.classList.add('none');

    } else if(!idPapel.classList.contains('none') && !idPaper.classList.contains('none')) {
        idPapel.classList.add('none');
        idPaper.classList.add('none');

    } else if(!idPedra.classList.contains('none') && !idStone.classList.contains('none')) {
        idPedra.classList.add('none');
        idStone.classList.add('none');
    }

    if(jogarComputador === minhaJogada) {
        //alert('empate')
        if(jogarComputador === 'tesoura' && minhaJogada === 'tesoura') {
            idTesoura.classList.remove('none');
            idScissors.classList.remove('none');
        } else if(jogarComputador === 'papel' && minhaJogada === 'papel') {
            idPapel.classList.remove('none');
            idPaper.classList.remove('none');
        } else if(jogarComputador === 'pedra' && minhaJogada === 'pedra') {
            idPedra.classList.remove('none');
            idStone.classList.remove('none');
        }

    } else if(jogarComputador === 'pedra' && minhaJogada === 'papel') {
       // alert('O computador escolheu pedra e você papel');
        minhaPontuacao.textContent = `Sua pontuação: ${pontuacaoDoJogador++}`;
        idPapel.classList.remove('none');
        idStone.classList.remove('none');

    } else if(jogarComputador === 'pedra' && minhaJogada === 'tesoura') {
       // alert('O computador escolheu pedra e você tesoura');
        pontuacaoComputador.textContent = `Pontuação do computador: ${pontuacaoDoComputador++}`;
        idTesoura.classList.remove('none');
        idStone.classList.remove('none');

    } else if(jogarComputador === 'papel' && minhaJogada === 'pedra') {
       // alert('O computador escolheu papel e você pedra');
        pontuacaoComputador.textContent = `Pontuação do computador: ${pontuacaoDoComputador++}`;
        idPedra.classList.remove('none');
        idPaper.classList.remove('none');

    } else if(jogarComputador === 'papel' && minhaJogada === 'tesoura') {
       // alert('O computador escolheu papel e você tesoura');
        minhaPontuacao.textContent = `Sua pontuação: ${pontuacaoDoJogador++}`;
        idTesoura.classList.remove('none');
        idPaper.classList.remove('none');

    } else if(jogarComputador === 'tesoura' && minhaJogada === 'pedra') {
       // alert('O computador escolheu tesoura e você pedra');
        minhaPontuacao.textContent = `Sua pontuação: ${pontuacaoDoJogador++}`;
        idPedra.classList.remove('none');
        idScissors.classList.remove('none');

    } else if(jogarComputador === 'tesoura' && minhaJogada === 'papel') {
       // alert('O computador escolheu tesoura e você papel');
        pontuacaoComputador.textContent = `Pontuação do computador: ${pontuacaoDoComputador++}`;
        idPapel.classList.remove('none');
        idScissors.classList.remove('none');

    }

}


function aleatorio() {
  return  Math.floor(Math.random() * 3); 
}

