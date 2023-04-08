let menu = document.querySelector('#menu');
let menu_bar = document.querySelector('#menu__icono');

menu_bar.addEventListener('click',function(){
    menu.classList.toggle ('menu-toggle');
})