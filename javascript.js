// JavaScript to make the elements fade in upon loading/refreshing the page on desktop only

const mq = window.matchMedia('(min-width: 1024px)');

if (mq.matches) {
  const animatedTags = document.querySelectorAll('.box-1, .box-2, .box-3');

  animatedTags.forEach((tag) => {
    tag.style.opacity = 0;
  });

  const fadeIn = function () {
    let delay = 0.25;

    animatedTags.forEach((tag) => {
      const tagTop = tag.getBoundingClientRect().top;
      const tagBottom = tag.getBoundingClientRect().bottom;

      if (tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadein 1s ${delay}s both`;
        delay = delay + 0.25;
      } else {
        tag.style.opacity = 0;
        tag.style.animation = '';
      }
    });
  };

  fadeIn();
} else {
  animatedTags.style.opacity = 1;
}
