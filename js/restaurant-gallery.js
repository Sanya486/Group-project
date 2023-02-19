let offset = 0;
const photoSlider = document.querySelector('.slider-restaurant');

document.querySelector('.restaurant-gallery .button-right').addEventListener('click', function (){
    offset = offset + 468;
    if (offset > 1372) {
        offset = 0
    }
    photoSlider.style.right = offset + 'px';
});


document.querySelector('.restaurant-gallery .button-left').addEventListener('click', function () {
    offset = offset - 468;
    if (offset < 0) {
        offset = 0
    }
    photoSlider.style.right = offset + 'px';
});
