const container = document.querySelector('.container');
const returnBtn = document.querySelector('svg.return')
const breatheCircle = document.querySelector('div.breathe .breathe-circle');
const breatheCircleSpan = document.querySelector('div.breathe span')
const methods = document.querySelectorAll('div > div > div > h3')

methods.forEach(i => i.addEventListener('click', () => {
    container.classList.add('active');
    method = i.textContent
    console.log(method);
}))

let method;
let bool;

const deepBreathing = () => {
    setTimeout(() => {
        bool ? breatheCircleSpan.textContent = 'inhale' : ''
        setTimeout(() => {
            bool ? breatheCircleSpan.textContent = 'hold' : ''
            setTimeout(() => {
                bool ? breatheCircleSpan.textContent = 'exhale' : ''
            }, 7000)
        }, 4000)
    }, 0)
}

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

const awakeBreathing = () => {
    setTimeout(() => {
        bool ? breatheCircleSpan.textContent = 'inhale' : ''
        setTimeout(() => {
            bool ? breatheCircleSpan.textContent = 'exhale' : ''
        }, 6000)
    }, 0)
}

breatheCircleSpan.addEventListener('click', () => {
    bool = true;
    breatheCircle.classList.add(method)
    if(method == 'deep') {
        deepBreathing();
        setInterval(deepBreathing, 19000);
    }
    else if(method == 'box') {
        boxBreathing();
        setInterval(boxBreathing, 16000)
    }
    else if(method == 'awake') {
        awakeBreathing()
        setInterval(awakeBreathing, 8000)
    }

    console.log(method)

})

returnBtn.addEventListener('click', () => {
    container.classList.remove('active');
    breatheCircleSpan.textContent = 'start'
    breatheCircle.classList.remove(method)
    bool = false;
})







