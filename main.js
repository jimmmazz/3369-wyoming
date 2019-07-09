// Slide in from Left and Right
const sliders = document.querySelectorAll('.slide-in');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25
};

const slideInObserver = new IntersectionObserver(function(
  entries,
  slideInObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // console.log(entry);
      return;
    } else {
      // console.log(entry);
      entry.target.classList.add('appear');
      slideInObserver.unobserve(entry.target);
    }
  });
},
options);

sliders.forEach(slider => {
  // console.log(slider);
  slideInObserver.observe(slider);
});

//Event listener ffor gallery scroll

document.querySelector('.gallery').addEventListener('click', function(e) {
  const whatClicked = e.target;
  console.log(whatClicked);
  if (whatClicked.nextElementSibling === null) {
    whatClicked.style.order = '0';
  } else {
    whatClicked.nextElementSibling.style.order = '-1';
    whatClicked.style.order = '0';
  }
});

// function scrollSlide(e) {
//   const whatClicked = e.target;

//   if (whatClicked) {
//     let i = 0;

//     x.forEach(slide => {
//       i++;

//       if (i === x.length) {
//         console.log(i);
//         slide.style.order = x.length - 1;
//         console.log('end');
//       } else {
//         // console.log(i);
//         console.log(i);
//         whatClicked.style.order = x.length;
//         slide.style.order = i;
//       }
//     });
//   }
// }
