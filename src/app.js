const techniques = document.querySelector('.techniques')
const breathe = document.querySelector('.breathe')
const breatheCircle = document.querySelector('.breathe .breathe-circle');
const breatheStart = document.querySelector('.breathe span')
const deep = document.querySelector('.deep h3')
const box = document.querySelector('.box h3')
const awake = document.querySelector('.awake h3')

deep.addEventListener('click', () => {
    techniques.classList.add('hide')
    breathe.classList.add('active')
    breatheCircle.classList.add('deep')

})



