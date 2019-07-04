// const container = document.querySelector('.container');
// const slideImage = document.querySelectorAll('.image');
// const slideText = document.querySelectorAll('.text');
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
      console.log(entry);
      return;
    } else {
      console.log(entry);
      entry.target.classList.add('appear');
      slideInObserver.unobserve(entry.target);
    }
  });
},
options);

sliders.forEach(slider => {
  console.log(slider);
  slideInObserver.observe(slider);
});
