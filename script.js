/* Toggle menu mobile */
const openMenu = document.querySelector('.open-img')
const closeMenu = document.querySelector('.close-img')
const hiddenMenu = document.querySelector('.a-header__menu')
window.addEventListener('load', () => { 
    if(window.innerWidth <= 700) {
        hiddenMenu.style.visibility = 'hidden'
    } else return false
})

openMenu.addEventListener('click', () => {
    closeMenu.classList.add('close-active')
    openMenu.classList.add('open-inative')
    hiddenMenu.style.visibility = 'visible'
})
closeMenu.addEventListener('click', () => {
    closeMenu.classList.remove('close-active')
    openMenu.classList.remove('open-inative')
    closeMenu.classList.add('close-animation')
    setTimeout(() => {
        closeMenu.classList.remove('close-animation')
        hiddenMenu.style.visibility = 'hidden'
    }, 100)
})

/* Resize window fix */
window.addEventListener('resize', () => {
    const width = window.innerWidth
    if(width <= 700) {
        hiddenMenu.style.visibility = 'hidden'
        openMenu.classList.remove('open-inative')
        closeMenu.classList.remove('close-active')
    } else {
        hiddenMenu.style.visibility = 'visible'
        closeMenu.classList.remove('close-active')
    }
})