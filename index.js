document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".container");
  const slideNav = document.getElementsByName("slide");

  function showSlide(n) {
    slides.forEach((slide, index) => {
      slide.style.display = "none";
      slide.classList.remove("active");
      slideNav[index].checked = false;
    });
    slides[n].style.display = "flex";
    slides[n].classList.add("active");
    slideNav[n].checked = true;
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds

  slideNav.forEach((input, index) => {
    input.addEventListener("click", () => {
      slideIndex = index;
      showSlide(slideIndex);
    });
  });

  showSlide(slideIndex);
});
