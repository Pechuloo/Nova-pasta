const canvas = document.getElementById("Canvas");
const ctx = canvas.getContext("2d");

let mouseX = canvas.width / 2;
let mouseY = canvas.height / 2;

let x = mouseX;
let y = mouseY;

canvas.addEventListener("mousemove", function (evento) {
  const area = canvas.getBoundingClientRect();
  mouseX = evento.clientX - area.left;
  mouseY = evento.clientY - area.top;
});

function desenharFigura(cx, cy) {
  // rosto
  ctx.beginPath();
  ctx.arc(cx, cy, 30, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(cx - 10, cy - 8, 4, 0, Math.PI * 2);
  ctx.arc(cx + 10, cy - 8, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(cx, cy + 2, 16, 0, Math.PI);
  ctx.stroke();
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x += (mouseX - x) * 1;
  y += (mouseY - y) * 1;
  desenharFigura(x, y);
  requestAnimationFrame(animar);
}

animar();