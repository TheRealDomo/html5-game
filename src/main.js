const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
let dt = 0;
let last = 0;
const keyboardInput = new keyControls();
const speed = 64;
let p1 = 0;


function mainLoop(ms) {
  requestAnimationFrame(mainLoop);
  const t = ms / 1000;
  dt = t - last;
  last = t;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  if (keyboardInput.action) {
    p1 += (speed * dt) * controls.y;
  }
  if (p1 > w) p1 -= w + 50;
  ctx.fillStyle = "red";
  ctx.fillRect(p1, 300, 50, 50);
}

requestAnimationFrame(mainLoop);


