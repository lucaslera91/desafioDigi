let menuBtn = document.querySelector('#menu-hamburguesa')

const openMenu = (width) => {
    const slider = document.querySelector('#contenedor-nav-bar')
    slider.style.left = width;
    menuBtn.style.backgroundImage = 'url(../recursos/iconos/close_24px.svg)'
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('.slide-help').style.overflow = 'visible'
}

const closeMenu = (width) => {
    const slider = document.querySelector('#contenedor-nav-bar')
    slider.style.left = width;
    slider.style.display = 'flex'
    menuBtn.style.backgroundImage = 'url(../recursos/iconos/menu_24px.svg)'
    document.querySelector('body').style.overflow = 'visible'
    document.querySelector('.slide-help').style.overflow = 'hidden'
}

const handleDisplayMenu = () => {

    if (menuBtn.style.backgroundImage === 'url("../recursos/iconos/close_24px.svg")') {
        closeMenu('100vw');
    } else {
        openMenu('0vw');
    }
}

const volverPantallaNormal = () => {

    const screen = document.querySelector('.screen')
    screen.classList.remove('blur-screen')
    document.querySelector('header').style.overflow = 'hidden'
    document.querySelector('body').style.overflow = 'visible'
    const formWraper = document.querySelector('.form-wraper')
    formWraper.style.position = 'relative'
    formWraper.style.left = '0'
    formWraper.style.top = '0'
    screen.style.zIndex = '1'
    formWraper.style.transform = 'translate(0)'
    formWraper.style.backgroundColor = 'transparent';
}

const makeFormScreen = () => {
    const screen = document.querySelector('.screen')
    screen.classList.add('blur-screen')
    const salirFormScreen = document.querySelector('.salir')
    const salirForm = document.querySelector('.salir')
    salirForm.classList.add('salir-form')
    document.querySelector('header').style.overflow = 'visible'
    document.querySelector('body').style.overflow = 'hidden'
    const formWraper = document.querySelector('.form-wraper')
    formWraper.style.position = 'absolute'
    formWraper.style.left = ''
    formWraper.style.top = ''
    screen.style.zIndex = '0'
    formWraper.style.backgroundColor = '#FFFFFF';
    salirFormScreen.addEventListener('click', volverPantallaNormal)
}

const handlePlaceholer = (target) => {

    target.addEventListener('keydown', (e) => {
        let nextSibling = e.target.nextElementSibling;
        nextSibling.innerHTML = ''
    })

    target.addEventListener('keyup', (e) => {
        if (e.target.value.length === 0) {
            const str = e.target?.title
            const title = str.charAt(0).toUpperCase() + str.slice(1);
            let nextSibling = e.target.nextElementSibling;
            nextSibling.innerHTML = `${title} <span>*</span>`
        }
    })
}

const handleForm = (e) => {
    console.log(e.target)
    if (e.target.matches('input')) handlePlaceholer(e.target)
}






