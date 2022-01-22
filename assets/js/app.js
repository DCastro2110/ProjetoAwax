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


function teamSlide() {

    const pointOne = document.querySelector('.point-one-team')
    const pointTwo = document.querySelector('.point-two-team')
    const pointThree = document.querySelector('.point-three-team')
    const slider = document.querySelector('.sliders-team')


    pointOne.addEventListener('click', () => {
        pointOne.classList.add('point-active-team')
        pointTwo.classList.remove('point-active-team')
        pointThree.classList.remove('point-active-team')
        
        if (slider.style.marginLeft === '-200vw') {
            slider.setAttribute('style', 'margin-left: 0vw; transition: margin 600ms linear')
            return
        } 
        
        slider.setAttribute('style', 'margin-left: 0vw; transition: margin 300ms linear')
    })

    pointTwo.addEventListener('click', () => {
        pointTwo.classList.add('point-active-team')
        pointOne.classList.remove('point-active-team')
        pointThree.classList.remove('point-active-team')
        
        slider.setAttribute('style', 'margin-left: -100vw; transition: margin 300ms linear')
    })
    pointThree.addEventListener('click', () => {
        pointThree.classList.add('point-active-team')
        pointOne.classList.remove('point-active-team')
        pointTwo.classList.remove('point-active-team')
        
        if (slider.style.marginLeft === '0vw') {
            slider.setAttribute('style', 'margin-left: -200vw; transition: margin 600ms linear')
            return
        } 
        
        slider.setAttribute('style', 'margin-left: -200vw; transition: margin 300ms linear')
    })

    
}

teamSlide()
