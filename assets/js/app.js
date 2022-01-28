function menuButton() {
    const nav = document.querySelector('nav')
    const button = document.querySelector('.menu-button')
    let num = 0

    button.addEventListener('click', () => {
        if (num === 0) {
            nav.style.display = 'flex'
           
            num = 1
        } else if (num === 1) {
            nav.style.display = 'none'
            document.body.style.overflow = 'auto'
            num = 0
        }
    })
}
menuButton()
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

