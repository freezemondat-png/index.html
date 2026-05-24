let player = document.getElementById("player");
let enemy = document.getElementById("enemy");
let message = document.getElementById("message");

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let speed = 5;

// MOVE PLAYER
document.addEventListener("keydown", (e) => {
  if (e.key === "w") y -= speed;
  if (e.key === "s") y += speed;
  if (e.key === "a") x -= speed;
  if (e.key === "d") x += speed;

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkDistance();
});

// ENEMY DISTANCE CHECK (HORROR CORE)
function checkDistance() {
  let ex = enemy.offsetLeft;
  let ey = enemy.offsetTop;

  let dx = x - ex;
  let dy = y - ey;

  let dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < 80) {
    message.innerText = "IT SEES YOU.";
    enemy.style.background = "white";
  } else {
    message.innerText = "Stay moving.";
    enemy.style.background = "red";
  }
}
