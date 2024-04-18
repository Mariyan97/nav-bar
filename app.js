let lineOne = document.querySelector(".line-1");
let lineTwo = document.querySelector(".line-2");
let lineThree = document.querySelector(".line-3");

let burger = document.querySelector(".burger");
// main-function

burger.addEventListener("click", () => {
  let wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("active");
  // burger animation
  lineOne.classList.toggle("left");
  lineTwo.classList.toggle("opacity");
  lineThree.classList.toggle("right");
});
