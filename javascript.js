const animatedTags = document.querySelectorAll('.box-1, .box-2, .box-3');

// fade out on load
animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  // look through all the animated tags and see with the getBoundingClientRect if they're in the window

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

// on load, run fadeIn

fadeIn();
