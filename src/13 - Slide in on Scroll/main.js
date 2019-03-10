/*
 * Elements
 */

const sliderImages = document.querySelectorAll('.slide-in');

/*
 * Functions
 */

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return () => {
    const context = this;
    const args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    const slideInAt = (window.scrollY + window.innerHeight) - (sliderImage.height / 2);
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

/*
 * Event listeners
 */

window.addEventListener('scroll', debounce(checkSlide));
