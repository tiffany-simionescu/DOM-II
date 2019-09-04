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
