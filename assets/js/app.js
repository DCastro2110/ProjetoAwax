function menu() {
    const nav = document.querySelector('nav')
    const button = document.querySelector('.menu-button')
    const li = document.querySelectorAll('.menu-list li')
    let displayStyleNone = true
    let maxWidth = window.matchMedia("(max-width: 767.98px)") 
    
    button.addEventListener('click', () => {
        if (displayStyleNone === true) {
            nav.style.display = 'flex'
            document.body.style.overflow = 'hidden'
           
            displayStyleNone = false
        } else {
            nav.style.display = 'none'
            document.body.style.overflow = 'auto'
            displayStyleNone = true
        }
    })
    
    setInterval(() => {
        if (!maxWidth.matches) {
            nav.style.display = 'flex' 
        } else {
            if (displayStyleNone === true) {
                nav.style.display = 'none'     
            } else {
                nav.style.display = 'flex'
            }
        }
    }, 0)
    
    if (maxWidth.matches) {
        for (let i = 0; i <= li.length; i++) {
            li[i].addEventListener('click', () => {
                nav.style.display = 'none'
                document.body.style.overflow = 'auto'
                displayStyleNone = true
            })
        }
    }

}

menu()

function bannerSlide() {

    const pointOne = document.querySelector('.point-one')
    const pointTwo = document.querySelector('.point-two')
    const pointThree = document.querySelector('.point-three')
    const slider = document.querySelector('.sliders')


    pointOne.addEventListener('click', () => {
        pointOne.classList.add('point-active')
        pointTwo.classList.remove('point-active')
        pointThree.classList.remove('point-active')
        
        if (slider.style.marginLeft === '-200vw') {
            slider.setAttribute('style', 'margin-left: 0vw; transition: margin 600ms linear')
            return
        } 
        
        slider.setAttribute('style', 'margin-left: 0vw; transition: margin 300ms linear')
    })

    pointTwo.addEventListener('click', () => {
        pointTwo.classList.add('point-active')
        pointOne.classList.remove('point-active')
        pointThree.classList.remove('point-active')
        
        slider.setAttribute('style', 'margin-left: -100vw; transition: margin 300ms linear')
    })
    pointThree.addEventListener('click', () => {
        pointThree.classList.add('point-active')
        pointOne.classList.remove('point-active')
        pointTwo.classList.remove('point-active')
        
        if (slider.style.marginLeft === '0vw') {
            slider.setAttribute('style', 'margin-left: -200vw; transition: margin 600ms linear')
            return
        } 
        
        slider.setAttribute('style', 'margin-left: -200vw; transition: margin 300ms linear')
    })

    
}

bannerSlide()