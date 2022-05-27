var corpo = document.getElementById('body')

function changeColorRed(){
    if (corpo.classList.contains('red')){
        corpo.classList.remove('red');
    } else {
        corpo.classList.add('red');
        corpo.style.transitionDuration='.5s'
        corpo.classList.add('yellow');
        corpo.classList.remove('green');
        corpo.classList.remove('orange');
        corpo.classList.remove('yellow');
        corpo.classList.remove('blue');
    }
}

function changeColorBlue(){
    if (corpo.classList.contains('blue')){
        corpo.classList.remove('blue');
    } else {
        corpo.style.transitionDuration='.5s'
        corpo.classList.add('blue');
        corpo.classList.remove('green');
        corpo.classList.remove('orange');
        corpo.classList.remove('yellow');
        corpo.classList.remove('red');
    }
}

function changeColorYellow(){
    if (corpo.classList.contains('yellow')){
        corpo.classList.remove('yellow');
    } else {
        corpo.style.transitionDuration='.5s'
        corpo.classList.add('yellow');
        corpo.classList.remove('green');
        corpo.classList.remove('orange');
        corpo.classList.remove('blue');
        corpo.classList.remove('red');
    }
}

function changeColorOrange(){
    if (corpo.classList.contains('orange')){
        corpo.classList.remove('orange');
    } else {
        corpo.style.transitionDuration='.5s'
        corpo.classList.add('orange');
        corpo.classList.remove('green');
        corpo.classList.remove('yellow');
        corpo.classList.remove('blue');
        corpo.classList.remove('red');
    }
}

function changeColorGreen(){
    if (corpo.classList.contains('green')){
        corpo.classList.remove('green');
    } else {
        corpo.style.transitionDuration='.5s'
        corpo.classList.add('green');
        corpo.classList.remove('orange');
        corpo.classList.remove('yellow');
        corpo.classList.remove('blue');
        corpo.classList.remove('red');
    }
}
