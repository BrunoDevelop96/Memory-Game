const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer =document.querySelector('.timer');
const personagens = [
    'buu',
    'cell',
    'freeza2',
    'gohan2',
    'goku2',
    'gokunivel3',
    'goten',
    'piccolo',
    'Super-Boo',
    'veditaMal',
]
//Criar os elementos no html.
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secoundCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');

    if (disabledCards.length == 20) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML} ! Seu tempo foi: ${timer.innerHTML}.`);
    }
}
//Função para checar cartas
const checkCards = () => {
    const firtPersonagens = firstCard.getAttribute('data-character');
    const secoundPersonagens = secoundCard.getAttribute('data-character');

    if (firtPersonagens == secoundPersonagens) {
        firstCard.firstChild.classList.add('disabled-card');
        secoundCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secoundCard = '';

        //verificando quando o jogo acabar
        checkEndGame();

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secoundCard.classList.remove('reveal-card');

            firstCard = '';
            secoundCard = '';
        }, 500);
    }
}
//Função para revelar carta ao clicar.
const revealCard = ({ target }) => {
    //Verificar para não abrir a carta que já está aberta.
    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    //Verificando para abrir só duas cartas.
    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secoundCard == '') {
        target.parentNode.classList.add('reveal-card');
        secoundCard = target.parentNode;
    }
    checkCards();
}
//Função para criar as cartas
const createCard = (personagens) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${personagens}.png')`;
    card.appendChild(front);
    card.appendChild(back);
    //Revelar a carta ao clicar
    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', personagens);
    return card
}
//Função para carregar o jogo
const loadGame = () => {
    const duplicarPersonagens = [...personagens, ...personagens];//Array para duplicar as cartas
    //Embaralhar as cartas
    const EmbaralharCartas = duplicarPersonagens.sort(() => Math.random() - 0.5);
    EmbaralharCartas.forEach((personagens) => {
        const card = createCard(personagens);
        grid.appendChild(card);
    })
}
const startTimer = () => {

   this.loop = setInterval(() => {
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    },1000);
}
//Função para trazer o nome do usuario logado e o tempo.
window.onload = () =>{
    spanPlayer.innerHTML =  localStorage.getItem('player');;

    loadGame();
    startTimer();
}
