var vermelho = document.getElementById('btn-red')
var azul = document.getElementById('btn-blue')
var amarelo = document.getElementById('btn-yellow')
var laranja = document.getElementById('btn-orange')
var verde = document.getElementById('btn-green')
var corpo = document.getElementById('body')

function changeColorRed(){
    if (corpo.classList.contains('red')){
        corpo.classList.remove('red');
    } else {
        corpo.style.transitionDuration='.5s';
        corpo.className='';
        corpo.classList.add('red');
    }
}

function changeColorBlue(){
    if (corpo.classList.contains('blue')){
        corpo.classList.remove('blue');
    } else {
        corpo.style.transitionDuration='.5s';
        corpo.className='';
        corpo.classList.add('blue');
    }
}

function changeColorYellow(){
    if (corpo.classList.contains('yellow')){
        corpo.classList.remove('yellow');
    } else {
        corpo.style.transitionDuration='.5s';
        corpo.className='';
        corpo.classList.add('yellow');
    }
}

function changeColorOrange(){
    if (corpo.classList.contains('orange')){
        corpo.classList.remove('orange');
    } else {
        corpo.style.transitionDuration='.5s';
        corpo.className='';
        corpo.classList.add('orange');
    }
}

function changeColorGreen(){
    if (corpo.classList.contains('green')){
        corpo.classList.remove('green');
    } else {
        corpo.style.transitionDuration='.5s';
        corpo.className='';
        corpo.classList.add('green');
    }
}