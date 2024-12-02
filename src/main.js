const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
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
  ctx.strokeText(`Frame length: ${(dt * 1000).toFixed(2)} ms`, 70, 50);
  ctx.strokeText(`Total time: ${t.toFixed(2)}`, 70, 90);

  p1 += speed * dt;
if (p1 > w) p1 -= w + 50;
ctx.fillStyle = "#f00";
ctx.fillRect(p1, 120, 50, 50);
}

requestAnimationFrame(mainLoop);


