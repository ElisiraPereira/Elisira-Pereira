

const mario = document.querySelector('.mario');
const torre = document.querySelector('.torre');
const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')
  
const jump = () => {
    mario.classList.add('jump');


    setTimeout(()=>{
        mario.classList.remove('jump');
    
}, 500);


}

const loop=setInterval(() => {

    const torrePosition= torre.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace
    ('px', '');

if(torrePosition <= 120 && torrePosition > 0 && marioPosition < 60){
    torre.style.animation ='none';
    torre.style.left =`${torrePosition}px`;

    mario.style.animation ='none';
    mario.style.left =`${marioPosition}px`;

    mario.src='./nova-imagens/Breakdancer2.png';

    clearInterval(loop)
}

}, 10);

document.addEventListener('keydown', jump);

document.addEventListener('keydown', function(event){
    const jump = document.getElementById('jump');
    const step= 10;
    let currentBotoom= parseInt(window.getComputedStyle(jump).bottom,10);

    if (event.key==='ArrowUP'){
        jump.style.bottom = (currentBotoom + step) + 'px';

    }

});







