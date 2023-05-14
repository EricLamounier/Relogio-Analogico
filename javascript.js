var hour = document.querySelector('#ponteiro-hora');
var minute = document.querySelector('#ponteiro-minuto');
var second = document.querySelector('#ponteiro-segundo');

function setRotation(element, rotation){
    element.style.transform = `rotate(${rotation}deg)`
}

function setClock(){
    var date = new Date();

    setRotation(hour, (360/12) * date.getHours());

    setRotation(minute, (360/60) * date.getMinutes());

    setRotation(second, (360/60) * date.getSeconds());
    
}

setInterval(setClock, 500)

