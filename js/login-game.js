const input = document.querySelector('.input-login');
const button = document.querySelector('.button-login');
const form = document.querySelector('.form-login');

//Função de habilitar e desabilitar o button PLAY
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

//Função de salvar 
const handleSubmit = (event) => {
    event.preventDefault();//Previnir o comportamento padrão de recarregar a página.
    localStorage.setItem('player', input.value); //Salvar o nome do jogador.
    window.location ='./pages/game.html'; //redirecionar para a página do jogo.
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
