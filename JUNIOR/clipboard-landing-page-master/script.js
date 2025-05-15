/**
 * Code to activate animation for certain headers.
 *
 * Grab all the headers with .section_header-special
 * when the user scrolls, check each header in the list. See if it's in the viewport. If it's in the viewport, activate the animation.
 * If it's not in the viewport, remove its animation
 */

const section_headers = document.querySelectorAll(".section_header-special");
/**
 * Forces to activate on load so that users see animation first thing they enter the page.
 * Afterwards this will not run anymore and the scroll-event listener takes care of the animation
 */
window.addEventListener("load", () => {
  for (let i = 0; i < section_headers.length; i++) {
    const header = section_headers[i];
    isInView(header);
  }
});

window.addEventListener("scroll", () => {
  for (let i = 0; i < section_headers.length; i++) {
    const header = section_headers[i];
    isInView(header);
  }
});

function isInView(element) {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const coords = element.getBoundingClientRect();

  if (coords.top >= 0 && coords.top < windowHeight) {
    element.classList.add("section_header--animation");
  } else {
    element.classList.remove("section_header--animation");
  }
}
