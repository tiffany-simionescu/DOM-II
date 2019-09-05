// Prevents page from refreshing when you click a nav link

// let allLinks = document.querySelectorAll("a");

// allLinks.addEventListener("click", event => {
//   event.preventDefault();
// });

// Images - mouseover - change image

let contentImages = document.querySelectorAll(".img-content img");

contentImages[0].addEventListener("mouseover", e => {
  e.target.setAttribute("src", "/img/fun.jpg");
});

contentImages[0].addEventListener("mouseout", e => {
  e.target.setAttribute("src", "/img/adventure.jpg");
});

contentImages[1].addEventListener("mouseover", e => {
  e.target.setAttribute("src", "/img/adventure.jpg");
});

contentImages[1].addEventListener("mouseout", e => {
  e.target.setAttribute("src", "/img/fun.jpg");
});

// mouseover - scale top image

const headerImg = document.querySelector("img");

headerImg.addEventListener("mouseover", e => {
  e.target.style.transform = "scale(1.1)";
  e.target.style.transition = "transform 0.5s";
});

headerImg.addEventListener("mouseout", e => {
  e.target.style.transform = "scale(1)";
  e.target.style.transition = "transform 0.5s";
});

// wheel

let scale = 1;
const funBusTitle = document.querySelector("h1");

funBusTitle.onwheel = e => {
  e.preventDefault();

  scale += e.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  funBusTitle.style.transform = `scale(${scale})`;
};

// Drag and Drop - Sign Me Up Buttons

// let draggable = document.querySelectorAll(".btn");
// let dragzones = document.querySelectorAll(".destination");

// let dragzone1 = document.createElement("div");
// let dragzone2 = document.createElement("div");
// let dragzone3 = document.createElement("div");

// dragzones[0].appendChild(dragzone1);
// dragzones[1].appendChild(dragzone2);
// dragzones[2].appendChild(dragzone3);

// Double Click

let bottomImage = document.querySelector(".content-destination img");

bottomImage.addEventListener("dblclick", e => {
  e.target.setAttribute("src", "/img/destination2.jpg");
  e.target.setAttribute("alt", "On the Beach");
});

bottomImage.addEventListener("click", e => {
  e.target.setAttribute("src", "/img/destination.jpg");
  e.target.setAttribute("alt", "Second slide");
});
