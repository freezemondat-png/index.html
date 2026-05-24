const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const world = document.getElementById("world");
const flashlight = document.getElementById("flashlight");
const message = document.getElementById("message");

let px = 1000;
let py = 1000;

let ex = 400;
let ey = 400;

let speed = 6;

// INPUT
document.addEventListener("keydown", (e) => {
  if (e.key === "w") py -= speed;
  if (e.key === "s") py += speed;
  if (e.key === "a") px -= speed;
  if (e.key === "d") px += speed;
});

// GAME LOOP
function update() {

  // PLAYER POSITION
  player.style.left = px + "px";
  player.style.top = py + "px";

  // ENEMY CHASE AI
  let dx = px - ex;
  let dy = py - ey;
  let dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < 500) {
    ex += dx * 0.01;
    ey += dy * 0.01;
    message.innerText = "IT IS MOVING.";
  } else {
    message.innerText = "Grey Veil is silent.";
  }

  enemy.style.left = ex + "px";
  enemy.style.top = ey + "px";

  // CAMERA FOLLOW (WORLD SHIFT)
  world.style.transform =
    `translate(${-px + window.innerWidth/2}px, ${-py + window.innerHeight/2}px)`;

  // FLASHLIGHT FOLLOWS PLAYER
  flashlight.style.left = (window.innerWidth/2 - 150) + "px";
  flashlight.style.top = (window.innerHeight/2 - 150) + "px";

  // HORROR STATE
  if (dist < 60) {
    message.innerText = "CLOSE.";
    player.style.background = "red";
  } else {
    player.style.background = "white";
  }

  requestAnimationFrame(update);
}

update();
