let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = function(){
    menu.classList.toggle('bx-x');
    header.classList.toggle('active');
}


window.onscroll = function(){
    menu.classList.remove('bx-x');
    header.classList.remove('active');
}