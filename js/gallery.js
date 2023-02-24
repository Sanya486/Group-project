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


// let offset = 0;
// const photoSlider = document.querySelector('.photo-slider');
// const viewportWidth = window.innerWidth;

// function adjustSlideWidth() {
//   let slideWidth;
//   if (viewportWidth >= 1200) {
//     slideWidth = 298;
//   } else if (viewportWidth >= 768) {
//     slideWidth = 248;
//   } else {
//     slideWidth = 198;
//   }
//   return slideWidth;
// }

// function adjustOffset() {
//   const slideWidth = adjustSlideWidth();
//   const numSlides = Math.ceil(photoSlider.offsetWidth / slideWidth);
//   const maxOffset = (numSlides - 1) * slideWidth;
//   if (offset > maxOffset) {
//     offset = maxOffset;
//   }
// }

// function moveSlider(direction) {
//   const slideWidth = adjustSlideWidth();
//   adjustOffset();
//   if (direction === 'right') {
//     offset += slideWidth;
//     if (offset > maxOffset) {
//       offset = 0;
//     }
//   } else if (direction === 'left') {
//     offset -= slideWidth;
//     if (offset < 0) {
//       offset = maxOffset;
//     }
//   }
//   photoSlider.style.right = offset + 'px';
// }

// document.querySelector('.button-right').addEventListener('click', function () {
//   moveSlider('right');
// });

// document.querySelector('.button-left').addEventListener('click', function () {
//   moveSlider('left');
// });

// window.addEventListener('resize', function () {
//   adjustOffset();
//   moveSlider('none');
// });
