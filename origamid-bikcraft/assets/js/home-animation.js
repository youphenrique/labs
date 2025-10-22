const containerElement = document.querySelector('.introduction').children[0];

setTimeout(() => {
  containerElement.children[0].classList.add('animated', 'fade-in-down');
}, 400);

setTimeout(() => {
  containerElement.children[1].classList.add('animated', 'fade-in-down');
}, 800);

setTimeout(() => {
  containerElement.children[2].classList.add('animated', 'fade-in-down');
}, 1200);

setTimeout(() => {
  document.querySelector('.animate-inner').classList.add('animated', 'fade-in-down');
}, 1600);
