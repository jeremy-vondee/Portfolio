$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        }else {
            $('.navbar').removeClass('sticky')
        }
    })

    let typed = new Typed ('.typing', {
        strings: ["Designer", "Developer"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    });
    
    let type = new Typed ('.typing-2', {
        strings: ["Designer", "Developer"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
    })

    navSlide()
});



const scrollup = document.getElementById('back-home')
window.onscroll = scrollFunction

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollup.style.display = 'inline-block'
    } else {
        scrollup.style.display = 'none'
    }
}
function scrollUp() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

const navSlide = () => {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.navbar .menu')
    const menuLinks = document.querySelectorAll('.menu ul li')

    burger.addEventListener('click', () => {
        menu.classList.toggle('active')
        burger.classList.toggle('toggle')
            menuLinks.forEach ((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index/7 + 0.3}s`
                }
            })
    })
}