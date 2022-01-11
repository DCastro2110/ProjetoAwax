function bannerSlide() {

    const pointOne = document.querySelector('.point-one')
    const pointTwo = document.querySelector('.point-two')
    const pointThree = document.querySelector('.point-three')
    const slider = document.querySelector('.sliders')


    pointOne.addEventListener('click', () => {
        pointOne.classList.add('point-active')
        pointTwo.classList.remove('point-active')
        pointThree.classList.remove('point-active')
        
        slider.setAttribute('style', 'margin-left: 0; transition: margin 300ms linear')
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
        
        slider.setAttribute('style', 'margin-left: -200vw; transition: margin 300ms linear')
    })
}

bannerSlide()
