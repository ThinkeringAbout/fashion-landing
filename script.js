let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slider = document.querySelector('.slider-line');
let images = document.querySelectorAll('.slider-line img')
let offset = -240;

function nextSlide() {
    let index = 0;
    nextBtn.onclick = null;
    prevBtn.onclick = null;
    if (offset != ((images.length-3)*160) - 240) {
        offset += 160;
        slider.style.right = offset + 'px';
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('active')) {
                if (i != images.length) {
                    images[i].classList.remove('active');
                    index = i;
                }
            }
            if (images[i].classList.contains('half-active')) {
                images[i].classList.remove('half-active');
            }
        }
        if (index != images.length) {
            images[index].classList.add('half-active');
            images[index+1].classList.add('active');
            if (index < images.length - 2) {
                images[index+2].classList.add('half-active');
            }
        }
    }
    setTimeout(function() {
        nextBtn.onclick = nextSlide;
        prevBtn.onclick = backSlide;
    }, 600);
    
}

function backSlide() {
    let index = 0;
    nextBtn.onclick = null;
    prevBtn.onclick = null;
    if (offset != -560) {
        offset -= 160;
        slider.style.right = offset + 'px';
        for (let i = 0; i < images.length; i++) {
            if (images[i].classList.contains('active')) {
                if (i != 0) {
                    images[i].classList.remove('active');
                    index = i;
                }
            }
            if (images[i].classList.contains('half-active')) {
                console.log(i);
                if (i != 1) {
                    images[i].classList.remove('half-active');
                }
            }
        }
        if (index != images.length) {
            images[index-1].classList.add('active');
            if (index > 1) {
                images[index-2].classList.add('half-active');
            }
            images[index].classList.add('half-active');
        }
    }
    setTimeout(function() {
        nextBtn.onclick = nextSlide;
        prevBtn.onclick = backSlide;
    }, 600);
}

nextBtn.onclick = nextSlide;
prevBtn.onclick = backSlide;
