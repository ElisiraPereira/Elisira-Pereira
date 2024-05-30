$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
    });  
    
    let midia = document.querySelector('.midia');
let times = document.querySelector('.time');
let mobileNav = document.querySelector('.mobile-nav');

midia.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

time.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});

var btn= doc.querySelector(".button");
btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px')
}

