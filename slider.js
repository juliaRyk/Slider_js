const sliderLine = document.querySelector('.slider_line');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dots = document.querySelectorAll('.dot');

let position = 0;
let dotIndex = 0;


let nextSlide = () => {
    if (position < (dots.length - 1) * 679) {
        position += 679;
        dotIndex ++;   
    } else {
        position = 0;
        dotIndex = 0;
    }
    sliderLine.style.left = -position + 'px';
    thisSlade(dotIndex);
    hotel(dotIndex);
}

let prevSlide = () => {
    if (position > 0) {
        position -= 679;
        dotIndex --  ; 
    } else {
        position = (dots.length - 1) * 679;
        dotIndex = (dots.length - 1);
    }
    sliderLine.style.left = -position + 'px';
    thisSlade(dotIndex);
    hotel(dotIndex);
}

right.addEventListener('click', nextSlide)
left.addEventListener('click', prevSlide)

dots.forEach( (dot, index) => {
    dot.addEventListener('click', () => {
        position = index * 679;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlade(dotIndex);
        hotel(dotIndex);
    })
})

let thisSlade = (index) => {
    for (let dot of dots) {
        dot.classList.remove('active');
    };
    dots[index].classList.add('active')
}

const textDots = document.querySelectorAll('.li2')

textDots.forEach( (li2, index) => {
    li2.addEventListener('click', () => {
        position = index * 679;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlade(dotIndex);   
    })
})

let hotel = (index) => {
    for (let li2 of textDots) {
        li2.classList.remove('active2');
    };
    textDots[index].classList.add('active2')
}

// setInterval( () => {
//     nextSlide()
// }, 4000)