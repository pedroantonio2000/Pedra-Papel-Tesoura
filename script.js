const myScoreEl = document.querySelector('.myScore');
const computerScoreEl = document.querySelector('.computerScore');
const containerEmoji = document.querySelector('.container-emoji')
const buttonEl = document.querySelectorAll('.button-emoji');
const pedra = document.querySelector('#pedra');
const papel = document.querySelector('#papel');
const tesoura = document.querySelector('#tesoura');
const stone = document.querySelector('.button-stone');
const paper = document.querySelector('.button-paper');
const scissors = document.querySelector('.button-scissors');
const buttonPedra = document.querySelector('.button-pedra');
const buttonPapel = document.querySelector('.button-papel');
const buttonTesoura = document.querySelector('.button-tesoura');
//const s = document.querySelector('.sele').selectedIndex;



let playerScore = 0;
let computerScore = 0;
const botoes = ['Pedra', 'Papel', 'Tesoura'];



//myScoreEl.addEventListener('click', pontuacaoDoJogador)
pedra.addEventListener('click', jogar);
papel.addEventListener('click', jogar);
tesoura.addEventListener('click', jogar);
//computerScoreEl.addEventListener('click', () => random(0, 10));
//myScoreEl.addEventListener('click', jogarComputador)
// buttonEl.forEach(botao => {
//     botao.addEventListener('click', () => jogar('jogada'));
// })

function jogar() {    
    player();
    computer();
    //pontuacaoDoJogador();
    buttonEl.forEach((botao) => {
        botao.disabled = true;
    })
}


function player() {
    document.addEventListener('click', function(e) {
        if(e.target.id === 'pedra') {
            stone.classList.remove('none')

        } else if(e.target.id === 'papel') {
            paper.classList.remove('none');
        } else {
            scissors.classList.remove('none')
        }
    })
}


function random(min, max) {
//    console.log(Math.floor(Math.random() * 3));
//    console.log(botoes[random])
    
    
    
}



function computer() {
    const aleatorio = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    
    if(botoes[aleatorio(0, botoes.length)] === botoes[0]) {
        buttonPedra.classList.remove('none');
        console.log(botoes)
    } else if(botoes[aleatorio(0, botoes.length)] === botoes[1]) {
        buttonPapel.classList.remove('none');
    
    } else {
        buttonTesoura.classList.remove('none');
    }
}


function pontuacaoDoJogador() {
    
}


document.addEventListener('click', function(e) {
    console.log(e.target.tagName)
})





//console.log(botoes)

// stone.dataset.pedra = true;




// function eventos(e) {
//     if(e.target.id === 'pedra') {
//         stone.classList.remove('none');
//     } else if(e.target.id === 'papel') {
//         paper.classList.remove('none');
//     } else {
//         scissors.classList.remove('none');
//     }
// }