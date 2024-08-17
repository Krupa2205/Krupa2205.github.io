// JavaScript to show/hide the "Scroll to Top" button
window.addEventListener("scroll", function () {
  const scrollToTopButton = document.querySelector(".scrollToTop");
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add("visible");
  } else {
    scrollToTopButton.classList.remove("visible");
  }
});
