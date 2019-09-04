// Prevents page from refreshing when you click a nav link

// let allLinks = document.querySelectorAll("a");

// allLinks.addEventListener("click", event => {
//   event.preventDefault();
// });

// Images - mouseover - change image

let contentImages = document.querySelectorAll(".img-content img");

contentImages[0].addEventListener("mouseover", event => {
  event.target.setAttribute("src", "/img/fun.jpg");
});

contentImages[0].addEventListener("mouseout", event => {
  event.target.setAttribute("src", "/img/adventure.jpg");
});

contentImages[1].addEventListener("mouseover", event => {
  event.target.setAttribute("src", "/img/adventure.jpg");
});

contentImages[1].addEventListener("mouseout", event => {
  event.target.setAttribute("src", "/img/fun.jpg");
});

// keydown - change color of Welcome to Fun Bus

// let funBusText = document.querySelector("h2");

// funBusText.addEventListener("keydown", event => {
//   if (event.isComposing || event.keyCode === 16) {
//     return;
//   }
//   event.target.style.color = "purple";
// });

// wheel

let scale = 1;
const funBusTitle = document.querySelector("h1");

funBusTitle.onwheel = event => {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  funBusTitle.style.transform = `scale(${scale})`;
};
