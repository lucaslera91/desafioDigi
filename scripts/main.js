let caruselWrap = document.querySelector('.carrusel-wrap')
let innerWrap = document.querySelector('.inner-wrap')
const slider = document.querySelector('#contenedor-nav-bar')

const formBtn = document.querySelector('#button-texto')

let clickeado = false;
let inicioX;
let avance;
let x;

caruselWrap.addEventListener('mousedown', (e) => {
    clickeado = true;
    inicioX = e.clientX
})

caruselWrap.addEventListener('mouseup', (e) => {
    clickeado = false;
})

const removeEventListenerIfSmallScreen = () => {
    if (window.innerWidth < 760) formBtn?.removeEventListener('click', makeFormScreen)
}


window.addEventListener('resize', () => {
    innerWrap.style.left = `0%`
    if (window.innerWidth > 759) {
        slider.style.left = '150px';
        formBtn.addEventListener('click', makeFormScreen)
    } else {
        slider.style.left = '100vw'
        formBtn?.removeEventListener('click', makeFormScreen)
    }
})

caruselWrap.addEventListener('mousemove', (e) => {
    if (!clickeado) return
    if (window.innerWidth > 900) return
    e.preventDefault();

    let part = window.innerWidth / 3

    const next = (part) => {
        innerWrap.offsetLeft > 100 && innerWrap.offsetLeft > - 100 ? avance = 0 : avance = - part
    }

    const prev = (part) => {
        innerWrap.offsetLeft < 100 && innerWrap.offsetLeft < -100 ?
            avance = 0 :
            avance = part
    }

    e.clientX - inicioX < 0 ?
        next(part) :
        prev(part)

    innerWrap.style.left = `${avance}px`
})


formBtn.addEventListener('click', makeFormScreen);
form.addEventListener('click', handleForm);
menuBtn.addEventListener('click', handleDisplayMenu);
window.onload = removeEventListenerIfSmallScreen;



//document.querySelector('body').addEventListener('click', e => console.log(e.target))