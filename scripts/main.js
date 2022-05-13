let innerWrap = document.querySelector('.inner-wrap')
const slider = document.querySelector('#contenedor-nav-bar')
let menuBtn = document.querySelector('#menu-hamburguesa')
const formBtn = document.querySelector('#button-texto')

//manejo del display del menu

const handleDisplayMenu = () => {

    if (menuBtn.style.backgroundImage === 'url("../recursos/iconos/close_24px.svg")') {
        closeMenu('100vw');
    } else {
        openMenu('0vw');
    }
}

//Ejecucion de algunos event listeners

formBtn.addEventListener('click', makeFormScreen);
form.addEventListener('click', handleForm);
menuBtn.addEventListener('click', handleDisplayMenu);
window.onload = removeEventListenerIfSmallScreen;
