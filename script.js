let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

winow.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}