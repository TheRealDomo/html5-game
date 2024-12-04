import KeyControls from "../lib/keyboardControls.js"
const canvas = document.querySelector("#board canvas");
const ctx = canvas.getContext("2d");
const { width: w, height: h } = canvas;
let dt = 0;
let last = 0;
const keyboardInput = new keyControls();
const speed = 64;
let p1X = w / 2;
let p1Y = h / 2;


function mainLoop(ms) {
  requestAnimationFrame(mainLoop);
  const t = ms / 1000;
  dt = t - last;
  last = t;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);
  if (keyboardInput.action) {
    p1Y += (speed * dt) //* controls.y;
    p1X += (speed * dt) //* controls.x;
  }
  ctx.fillStyle = "red";
  ctx.fillRect(p1X, p1Y, 50, 50);
}

requestAnimationFrame(mainLoop);


