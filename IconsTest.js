const drawDot = (context) => {
  context.beginPath();
  context.arc(10, 10, 10, 0, 2 * Math.PI, false);
  context.fillStyle = "#f00";
  context.fill();
};

const ctx = document.getElementById("canvas").getContext("2d");

drawDot(ctx);
