let offset = 0;
const photoSlider = document.querySelector('.photo-slider');

document.querySelector('.button-right').addEventListener('click', function (){
    offset = offset + 298;
    if (offset > 1490) {
        offset = 0
    }
    photoSlider.style.right = offset + 'px';
});


document.querySelector('.button-left').addEventListener('click', function () {
    offset = offset - 298;
    if (offset < 0) {
        offset = 0
    }
    photoSlider.style.right = offset + 'px';
});
