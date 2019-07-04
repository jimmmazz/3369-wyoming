// const container = document.querySelector('.container');
// const slideImage = document.querySelectorAll('.image');
// const slideText = document.querySelectorAll('.text');
const sliders = document.querySelectorAll('.slide-in');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, options);

sliders.forEach(slider => {
  observer.observe(slider);
});
