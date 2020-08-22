const container = document.querySelector('.container');
const returnBtn = document.querySelector('svg.return')
const breatheCircle = document.querySelector('div.breathe .breathe-circle');
const breatheCircleSpan = document.querySelector('div.breathe span')
const deep = document.querySelector('div.deep h3')
const box = document.querySelector('div.box h3')
const awake = document.querySelector('div.awake h3')

let method;

deep.addEventListener('click', () => {
    container.classList.add('active');
    breatheCircle.classList.add('deep');
})

box.addEventListener('click', () => {
    container.classList.add('active');
    method = box.textContent;
    console.log(method);
})



awake.addEventListener('click', () => {
    container.classList.add('active');
})


let bool;

const boxBreathing = () => {
    setTimeout(() => {
        bool ? breatheCircleSpan.textContent = 'inhale' : ''
        setTimeout(() => {
            bool ? breatheCircleSpan.textContent = 'hold' : ''
            setTimeout(() => {
                bool ? breatheCircleSpan.textContent = 'exhale' : ''
                setTimeout(() => {
                    bool ? breatheCircleSpan.textContent = 'hold' : ''
                }, 4000)
            }, 4000)
        },4000)
    },0)
}

breatheCircleSpan.addEventListener('click', () => {
    bool = true;
    breatheCircle.classList.add(method)
    breatheCircle.classList.contains(method) ? boxBreathing() : ''
})


returnBtn.addEventListener('click', () => {
    container.classList.remove('active');
    breatheCircleSpan.textContent = 'start'
    breatheCircle.classList.remove(method)
    bool = false;
})







