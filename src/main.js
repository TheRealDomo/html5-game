const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector("input");


ctx.fillStyle = "green";


input.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "KeyS":
      case "ArrowDown":
          alert("Down keypress")               
      case "KeyW":
      case "ArrowUp":
        alert("Up keypress")               
      case "KeyA":
      case "ArrowLeft":
        alert("Left keypress")        
      case "KeyD":
      case "ArrowRight":
        alert("Right keypress")
    }
,
  true,
);

function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
}

setInterval(mainLoop(),30);
