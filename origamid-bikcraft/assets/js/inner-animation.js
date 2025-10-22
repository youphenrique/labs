const innerIntroductionElement = document.querySelector('.inner-introduction').children[0];

setTimeout(() => {
  innerIntroductionElement.children[0].classList.add('animated', 'fade-in-down');
}, 400);

setTimeout(() => {
  innerIntroductionElement.children[1].classList.add('animated', 'fade-in-down');
}, 800);

setTimeout(() => {
  document.querySelector('.animate-inner').classList.add('animated', 'fade-in-down');
}, 1000);

if (page === 'portfolio') {
  setTimeout(() => {
    const animateInnerNode = document.querySelectorAll('.animate-inner-2');

    animateInnerNode[0].classList.add('animated', 'fade-in-down');
    animateInnerNode[1].classList.add('animated', 'fade-in-down');
    animateInnerNode[2].classList.add('animated', 'fade-in-down');
  }, 1600);
}
