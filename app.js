let lineOne = document.querySelector(".line-1");
let lineTwo = document.querySelector(".line-2");
let lineThree = document.querySelector(".line-3");
const navLinks = document.querySelectorAll(".nav-link");
let burger = document.querySelector(".burger");
// main-function

burger.addEventListener("click", () => {
  let wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("active");
  // burger animation
  lineOne.classList.toggle("left");
  lineTwo.classList.toggle("opacity");
  lineThree.classList.toggle("right");

  // animate links

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 3}s`;
    }
  });
});

// gsap
