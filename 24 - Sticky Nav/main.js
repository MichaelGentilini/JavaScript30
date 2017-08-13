window.addEventListener('load', () => {

  /*
   * Elements 
   */

  const nav = document.querySelector('#main');

  /*
   * Properties 
   */

  const topOfNav = nav.offsetTop;

  /*
   * Functions 
   */

  function fixNav() {
    if (window.scrollY >= topOfNav) {
      document.body.style.paddingTop = `${nav.offsetHeight}px`;
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
  }

  /*
   * Event listeners 
   */

  window.addEventListener('scroll', fixNav);

});