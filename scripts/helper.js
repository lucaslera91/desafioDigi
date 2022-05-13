let caruselWrap = document.querySelector('.carrusel-wrap')
let clickeado = false;
let touch = true
let inicioX;
let inicioTouch;
let avance;
let x;

// Abrir el menu del slider. indico las posiciones que quiero. manipulo los overflow para llegar a los flujos solicitados.
const openMenu = (width) => {
    const slider = document.querySelector('#contenedor-nav-bar')
    slider.style.left = width;
    menuBtn.style.backgroundImage = 'url(../recursos/iconos/close_24px.svg)'
    document.querySelector('body').style.overflow = 'hidden'
    document.querySelector('.slide-help').style.overflow = 'visible'
}

//Cerrar el meno slider. mismo que recien. reestablezco posiciones iniciales
const closeMenu = (width) => {
    const slider = document.querySelector('#contenedor-nav-bar')
    slider.style.left = width;
    slider.style.display = 'flex'
    menuBtn.style.backgroundImage = 'url(../recursos/iconos/menu_24px.svg)'
    document.querySelector('body').style.overflow = 'visible'
    document.querySelector('.slide-help').style.overflow = 'hidden'
}

//Creo pantalla de form especial con el button en modo desktop. manipulo los formatos y clases

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

// vuelvo todo igual al estado anterior

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

// El cambio de place holder me estaba trayendo provblemas para funcionar como queria, por lo que para la prueba lo solucione con JS. 
// hice un texto p para el back ground y que funcione como un placeholder.

//funcion recibe un nodo de elemento (el clickeado)

const handlePlaceholer = (target) => {

    // cuando empiezo a escribir se deberia borrar el texto. tomo el elemento sibiling y lo borro cuando empiezo a escribir

    target.addEventListener('keydown', (e) => {
        let nextSibling = e.target.nextElementSibling;
        nextSibling.innerHTML = ''
    })

    //para que el placeholder vuelva a aparecer on keyup veo si hay algo escrito, si no hay nada, tomo el titulo y lo coloco igual que al inicio.

    target.addEventListener('keyup', (e) => {
        if (e.target.value.length === 0) {
            const str = e.target?.title
            const title = str.charAt(0).toUpperCase() + str.slice(1);
            let nextSibling = e.target.nextElementSibling;
            nextSibling.innerHTML = `${title} <span>*</span>`
        }
    })
}

// ejecuto la funcion para manipular los placeholders y creo los event listeners solo si es necesario

const handleForm = (e) => {
    console.log(e.target)
    if (e.target.matches('input')) handlePlaceholer(e.target)
}

//

//carrusel con mouse - si los movimientos son para un lado gira la posicion del div correspondiente. si es para el otro lado proceso inverso

caruselWrap.addEventListener('mousedown', (e) => {
    clickeado = true;
    inicioX = e.clientX
})

caruselWrap.addEventListener('mouseup', (e) => {
    clickeado = false;
})


// mas logica para el movimiento del click
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

//este resize esta porque cuando ejecuto JS para manipular tamaños me quedan mal configruadas algunas partes del diseño. 
// si es mobile vuele acciona de una forma, sino de otra
//el carrusel siempre vuelve a posicion inicial si cambio de tamaño


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

//debido que no estaba la funcion del formulario en version mobile, si la pantalla chica, se quita el Event Listener del button

const removeEventListenerIfSmallScreen = () => {
    if (window.innerWidth < 760) formBtn?.removeEventListener('click', makeFormScreen)
}

// manipulo carrusel con touch

const handleTouchStart = (e) => {
    //console.log(e.touches[0].clientX)
}
const handleTouchEnd = (e) => {
    console.log(e.touches[0].clientX)
    //console.log(e)
}
//caruselWrap.addEventListener('touchmove', e => console.log(e))
//caruselWrap.addEventListener('touch', e => console.log(e.target))
caruselWrap.addEventListener('touchstart', handleTouchStart)
caruselWrap.addEventListener('touchmove', handleTouchEnd)



caruselWrap.addEventListener('touchstart', (e) => {
    touch = true;
    inicioTouch = e.touches[0].clientX
    //console.log(inicioTouch)
})

caruselWrap.addEventListener('touchend', (e) => {
    touch = false;
    //console.log('first')
})

// testeo

const carruselMovingFunction = (e) => {
    //console.log(e)
    let part = window.innerWidth * 207 / window.innerWidth

    const next = (part) => {
        innerWrap.offsetLeft > 100 && innerWrap.offsetLeft > - 100 ? avance = 0 : avance = - part
    }
    const prev = (part) => {
        innerWrap.offsetLeft < 100 && innerWrap.offsetLeft < -100 ?
            avance = 0 :
            avance = part
    }
    e.touches[0].clientX - inicioTouch < 0 ?
        next(part) :
        prev(part)

    innerWrap.style.left = `${avance}px`
}

// mas logica para el movimiento del click
caruselWrap.addEventListener('touchmove', (e) => {
    if (!touch) return
    if (window.innerWidth > 900) return

    e.preventDefault();
    carruselMovingFunction(e);

})






