const cards = document.querySelectorAll('.tile');

const setClasses = () => {
    const classes = ['left', 'active', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))
}


const changePositions = (e) => {
    const clickedCard = e.currentTarget
    const activeCard = document.querySelector('.tile.active')
    if(clickedCard.classList.contains('active')) return;
    const classesFrom = e.currentTarget.className
    const classesTo = activeCard.className
    clickedCard.className = classesTo
    activeCard.className = classesFrom
}

cards.forEach((card) => {
    card
        .addEventListener('click', changePositions)
})

setClasses();

function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { 
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

scrollTrigger('.cross')