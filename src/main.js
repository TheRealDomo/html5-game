const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const input = document.querySelector("input");


ctx.fillStyle = "green";


input.addEventListener("keydown",processInput);

function processInput(e) {
  switch e.code {
    case "ArrowDown" :
      alert("Down Arrow Pressed")
  }
    
}

function mainLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
}

setInterval(mainLoop(),30);
