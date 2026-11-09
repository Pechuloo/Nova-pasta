
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function desenhar_quadrado(x, y, largura, altura, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor, espessura = 1) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = cor;
  ctx.lineWidth = espessura;
  ctx.stroke();
}

function desenhar_arco(x, y, raio, inicio, fim, cor, preenchimento = false) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim);
  if (preenchimento) {
    ctx.fillStyle = cor;
    ctx.fill();
  } else {
    ctx.strokeStyle = cor;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

function escrever(texto, x, y, tamanho, cor) {
  ctx.font = tamanho + "px Arial";
  ctx.fillStyle = cor;
  ctx.textAlign = "center";
  ctx.fillText(texto, x, y);
}
escrever("Canvas", 150, 50, 20, "#222222");


desenhar_quadrado(0, 0, 50, 50, "blue");
desenhar_quadrado(250, 0, 50, 50, "red");
desenhar_quadrado(0, 120, 30, 30, "#00e5df");
desenhar_quadrado(0, 150, 30, 30, "#00e5df");
desenhar_quadrado(270, 135, 30, 30, "#00e5df");
desenhar_quadrado(110, 150, 40, 40, "red");


desenhar_quadrado(0, 240, 30, 30, "yellow");
desenhar_quadrado(0, 270, 60, 30, "yellow");


desenhar_quadrado(270, 240, 30, 30, "black");
desenhar_quadrado(240, 270, 60, 30, "black");


desenhar_linha(50, 50, 150, 150, "blue", 1);
desenhar_linha(250, 50, 150, 150, "red", 1);
desenhar_linha(150, 190, 150, 267, "black", 1);


desenhar_arco(150, 150, 80, Math.PI, Math.PI * 5 / 4, "green");
desenhar_arco(150, 150,80, Math.PI * 7 / 4, Math.PI * 2, "green");
desenhar_arco(150, 150,60,Math.PI, Math.PI * 2, "green");

desenhar_arco(150, 307, 80, Math.PI, Math.PI * 2, "green");
desenhar_arco(150, 307, 40, Math.PI, Math.PI * 2, "green");


desenhar_arco(150, 115, 15, 0, Math.PI * 2, "#00e5ff", true);


desenhar_arco(70, 220, 15, 0, Math.PI * 2, "yellow", true);
desenhar_arco(220, 220, 15, 0, Math.PI * 2, "yellow", true);


desenhar_arco(150, 307, 40, Math.PI, Math.PI * 2, "#00e5df", true);

desenhar_linha(0, 150, 300, 150, "green")