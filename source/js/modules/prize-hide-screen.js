export default () => {
  const jsMenuLinkPrize = document.querySelectorAll('.js-menu-link');
  const fadeBackground = document.querySelector('.fade-background');
  const screenStory = document.querySelector('.screen--story');
  const screenPrizes = document.querySelector('.screen--prizes');

  for (let i = 0; i < jsMenuLinkPrize.length; i++) {
    jsMenuLinkPrize[i].addEventListener('click', function (e) {
      document.querySelector('.js-menu-link.active').classList.remove('active');
      if (jsMenuLinkPrize[i].getAttribute('data-href') == 'prizes') {
        if (!jsMenuLinkPrize[i].classList.contains('active')) {
          e.preventDefault();

          fadeBackground.classList.add('active-prize');
          this.classList.add('active');
          setTimeout(function () {
            screenStory.classList.add('screen--hidden');
            screenPrizes.classList.add('active');
            screenPrizes.classList.remove('screen--hidden');
            fadeBackground.classList.remove('active-prize');
          }, 500);
        }
      } else {
        fadeBackground.classList.remove('active-prize');
      }
    });
  }
}
