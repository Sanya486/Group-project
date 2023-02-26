let offset = 0;
let gap = 32;
const photoSlider = document.querySelector('.photo-slider');
const viewportWidth = document.body.clientWidth;
const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');
const imgWidth = document.querySelector('.width-js').clientWidth;

if (viewportWidth >= 1440) {
  buttonRight.addEventListener('click', function () {
    offset = offset + 298;
    if (offset > 1490) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });

  buttonLeft.addEventListener('click', function () {
    offset = offset - 298;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
} else if (viewportWidth >= 768) {
  buttonRight.addEventListener('click', function () {
    offset = offset + 398;
    if (offset > 1592) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
  buttonLeft.addEventListener('click', function () {
    offset = offset - 398;
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
} else {
  buttonRight.addEventListener('click', function () {
    offset = offset + (imgWidth + gap);
    if (offset > (imgWidth + gap)*3) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
  buttonLeft.addEventListener('click', function () {
    offset =  offset - (imgWidth - gap);
    if (offset < 0) {
      offset = 0;
    }
    photoSlider.style.right = offset + 'px';
  });
}
