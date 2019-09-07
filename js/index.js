// Prevents page from refreshing when you click a nav link

let allLinks = document.querySelectorAll("a");

for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].addEventListener("click", event => {
    event.preventDefault();
  });
}

// Images - mouseover / mouseout - change image

let contentImages = document.querySelectorAll(".img-content img");

contentImages[0].addEventListener("mouseover", e => {
  e.target.setAttribute("src", "img/fun.jpg");
});

contentImages[0].addEventListener("mouseout", e => {
  e.target.setAttribute("src", "img/adventure.jpg");
});

contentImages[1].addEventListener("mouseover", e => {
  e.target.setAttribute("src", "img/adventure.jpg");
});

contentImages[1].addEventListener("mouseout", e => {
  e.target.setAttribute("src", "img/fun.jpg");
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

// Bubbling and Stop Propagation

const bottomTextContainer = document.querySelector(".content-destination");

bottomTextContainer.addEventListener("click", e => {
  e.target.style.backgroundColor = "lightgrey";
});

const bottomTextH2 = document.querySelector(".content-destination h2");

bottomTextH2.addEventListener("click", e => {
  e.target.style.color = "purple";
  e.stopPropagation();
});

// Double Click

const bottomImage = document.querySelector(".content-destination img");

bottomImage.addEventListener("dblclick", e => {
  e.target.setAttribute("src", "img/destination2.jpg");
  e.target.setAttribute("alt", "On the Beach");
});

bottomImage.addEventListener("click", e => {
  e.target.setAttribute("src", "img/destination.jpg");
  e.target.setAttribute("alt", "Second slide");
});

// Load

window.addEventListener("load", e => {
  alert("Welcome to Fun Bus!");
});

// resize

const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

window.addEventListener("resize", e => {
  heightOutput.textContent = window.innerHeight + " px";
  widthOutput.textContent = window.innerWidth + " px";
});

// keydown - on first and third 'Sign Me Up!' Button

const bottomButtons = document.querySelectorAll(".btn");

document.addEventListener("keydown", e => {
  bottomButtons[0].textContent += ` ${e.code}`;
  bottomButtons[2].textContent += ` ${e.code}`;
});

// keyup - on second 'Sign Me Up!' Button

document.addEventListener("keyup", e => {
  bottomButtons[1].textContent += ` ${e.code}`;
});

// focus and blur - on nav links

const navLinks = document.querySelectorAll("a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("focus", event => {
    event.target.style.color = "pink";
  });

  navLinks[i].addEventListener("blur", event => {
    event.target.style.color = "";
  });
}

// STRETCH - Animation - Move top img off page

const animate = document.querySelector("img");

let animateKeyframes = new KeyframeEffect(
  animate,
  [{ transform: "translateY(0%)" }, { transform: "translateY(1000%)" }],
  { duration: 2000, fill: "forwards" }
);

let blockAnimation = new Animation(animateKeyframes, document.timeline);

animate.addEventListener("dblclick", toTheRight, false);

// Trigger a single-fire animation
function toTheRight(event) {
  // Remove those event listeners
  animate.removeEventListener("dblclick", toTheRight, false);

  // Play animation
  blockAnimation.play();
}

// STRETCH - Animation for text in first H2

const firstH2 = document.querySelector("h2");

firstH2.onclick = function() {
  animate2({
    duration: 2000,
    timing: function(timeFraction) {
      return timeFraction;
    },
    draw: function(progress) {
      firstH2.style.width = progress * 100 + "%";
    }
  });
};

function animate2({ duration, draw, timing }) {
  let start = performance.now();

  requestAnimationFrame(function animate2(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate2);
    }
  });
}
