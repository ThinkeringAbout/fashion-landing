let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let slider = document.querySelector('.slider-line');
let images = document.querySelectorAll('.slider-line img');
let offset = -240;

let promoBtnLeft = document.querySelector('.promo-left');
let promoBtnRight = document.querySelector('.promo-right');
let promoSlider = document.querySelector('.promo_slider_line');
let indications = document.querySelectorAll('.condition');
let promoOffset = 0;
let indicationsIndex = 0;

let trendingSlider = document.querySelector('.trending-slider-line');
let trendingIndications = document.querySelectorAll('.condition-tr');
let trendingBtnLeft = document.querySelector('.trending-left');
let trendingBtnRight = document.querySelector('.trending-right');
let trendingOffset = 0;
let trendingIndicationsIndex = 0;

let showMoreBtn = document.querySelector('.show-more-btn');
let categoriesList = document.querySelector('.categories-images');

function showLess () {
    showMoreBtn.onclick = null;
    categoriesList.style.height = 920 + 'px';
    setTimeout(function() {
        showMoreBtn.scrollIntoView({
            behavior: 'smooth'
        });
        showMoreBtn.onclick = showMore;
        showMoreBtn.innerHTML = "More Categories";
    }, 10);
}

function showMore () {
    showMoreBtn.onclick = null;
    categoriesList.style.height = 'fit-content';
    setTimeout(function() {
        showMoreBtn.scrollIntoView({
            behavior: 'smooth'
        });
        showMoreBtn.onclick = showLess;
        showMoreBtn.innerHTML = "Less Categories";
    }, 100);
}

function nextTrendingSlide () {
    let x = document.querySelector('.trending-img').width * 3 + 30;
    if (trendingOffset < x * 3 + 1) {
        trendingOffset += x;
        trendingSlider.style.right = trendingOffset + 'px';
        for (let i = 0; i < trendingIndications.length - 1; i++) {
            if (trendingIndications[i].classList.contains('condition-active')) {
                trendingIndications[i].classList.remove('condition-active');
                trendingIndicationsIndex = i;
            }
        }
        trendingIndications[trendingIndicationsIndex+1].classList.add('condition-active');
    }
}

function prevTrendingSlide () {
    let x = document.querySelector('.trending-img').width * 3 + 30;
    if (trendingOffset > 1) {
        trendingOffset -= x;
        trendingSlider.style.right = trendingOffset + 'px';
        for (let i = trendingIndications.length - 1; i > 0; i--) {
            if (trendingIndications[i].classList.contains('condition-active')) {
                trendingIndications[i].classList.remove('condition-active');
                trendingIndicationsIndex = i;
            }
        }
        trendingIndications[trendingIndicationsIndex-1].classList.add('condition-active');
    }
}

function nextPromoSlide() {
    promoBtnRight.onclick = null;
    promoBtnLeft.onclick = null;
    let x = document.querySelector('.slider-img').width * 5 + 50;
    if (promoOffset < x * 3 + 1) {
        promoOffset += document.querySelector('.promo_slider_line img').width * 5 + 50;
        promoSlider.style.right = promoOffset + 'px';
        for (let i = 0; i < indications.length - 1; i++) {
            if (indications[i].classList.contains('condition-active')) {
                indications[i].classList.remove('condition-active');
                indicationsIndex = i;
            }
        }
        indications[indicationsIndex+1].classList.add('condition-active');
    }
    setTimeout(function() {
        promoBtnRight.onclick = nextPromoSlide;
        promoBtnLeft.onclick = prevPromoSlide;
    }, 600);
}

function prevPromoSlide() {
    promoBtnRight.onclick = null;
    promoBtnLeft.onclick = null;
    let x = document.querySelector('.slider-img').width * 5 + 50;
    if (promoOffset > 1) {
        promoOffset -= document.querySelector('.promo_slider_line img').width * 5 + 50;
        promoSlider.style.right = promoOffset + 'px';
        for (let i = indications.length - 1; i > 0; i--) {
            if (indications[i].classList.contains('condition-active')) {
                indications[i].classList.remove('condition-active');
                indicationsIndex = i;
            }
        }
        indications[indicationsIndex-1].classList.add('condition-active');
    }
    setTimeout(function() {
        promoBtnRight.onclick = nextPromoSlide;
        promoBtnLeft.onclick = prevPromoSlide;
    }, 600);
}

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
promoBtnRight.onclick = nextPromoSlide;
promoBtnLeft.onclick = prevPromoSlide;
trendingBtnRight.onclick = nextTrendingSlide;
trendingBtnLeft.onclick = prevTrendingSlide;
showMoreBtn.onclick = showMore;