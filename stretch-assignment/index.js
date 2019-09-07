// Should only select the red block
const animate = document.querySelector(".block");
const container = document.querySelector(".blocks");

var animateKeyframes = new KeyframeEffect(
  animate,
  [{ transform: "translateX(0%)" }, { transform: "translateX(1000%)" }],
  { duration: 2000, fill: "forwards" }
);

var blockAnimation = new Animation(animateKeyframes, document.timeline);

// On tap or click,
animate.addEventListener("mousedown", toTheRight, false);
// animate.addEventListener("mouseup", toTheRight, true);

// Trigger a single-fire animation
function toTheRight(event) {
  // Remove those event listeners
  animate.removeEventListener("mousedown", toTheRight, false);
  //   animate.addEventListener("mouseup", toTheRight, true);

  // Play animation
  blockAnimation.play();
}

//Backwards
var animateKeyframesBW = new KeyframeEffect(
  animate,
  [{ transform: "translateX(1000%)" }, { transform: "translateX(0%)" }],
  { duration: 2000, fill: "backwards" }
);

var blockAnimationBW = new Animation(animateKeyframesBW, document.timeline);

animate.addEventListener("mouseup", toTheLeft, false);

function toTheLeft(event) {
  // Remove those event listeners
  animate.removeEventListener("mouseup", toTheLeft, false);

  // Play animation
  blockAnimationBW.play();
}
