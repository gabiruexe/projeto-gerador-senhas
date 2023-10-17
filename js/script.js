let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let valorElement = document.querySelector('#valor');
let senhaElement = document.querySelector('#senha');

let containerPassword = document.querySelector('#container-password');

//Variavél que recebe todos os caracteres.
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()'

//Elemento de senha vazia.
let novaSenha = "";

//o id ed valorElement pega o tamanmho do sliderElement e coloca na tela.
valorElement.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    valorElement.innerHTML = this.value;
}

function generationPassword() {
    let pass = '';
    //Começa em 0, n = tamanho de charset, sliderElement.value é o valor do slider. Enquanto i for menor que o valor do slider, i recebe + 1
    for(let i = 0,n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove('hide');
    senhaElement.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha);
    alert('Sua senha foi copiada!')
}