const ctx = document.getElementById("canvas").getContext("2d");

const drawImage = (context, svgData, { x, y, width, height, color }) => {
  const svgD2 = svgData
    .replace(/path/g, `path fill="${color}"`)
    .replace(/width="48"/g, `width="${width}"`)
    .replace(/height="48"/g, `height="${height}"`);

  const img = new Image();
  img.src = URL.createObjectURL(new Blob([svgD2], { type: "image/svg+xml" }));
  img.onload = () => {
    context.drawImage(img, x, y);
  };
};

/*
drawImage(ctx, icons.store, { x: 100, y: 0, width: 40, height: 60, color: "#f0f"});
drawImage(ctx, icons.cloud, { x: 0, y: 0, width: 40, height: 60, color: "#00f"});
*/

const cpath = "M38.71 20.07C37.35 13.19 31.28 8 24 8c-5.78 0-10.79 3.28-13.3 8.07C4.69 16.72 0 21.81 0 28c0 6.63 5.37 12 12 12h26c5.52 0 10-4.48 10-10 0-5.28-4.11-9.56-9.29-9.93z";

const drawImage2 = (context, { pathData, x, y, scale, color }) => {
  context.save();
  context.translate(x, y);
  context.fillStyle = color;
  context.scale(scale, scale);
  context.fill(new Path2D(pathData));
  context.restore();
};

let i = 0;

const runAni = () => {
  ctx.clearRect(0, 0, 400, 200);
  drawImage2(ctx, { pathData: icons.cloud, x: i, y: 10, scale: 1.2, color: "#00f"});
  i += 1;
  i %= 200;
  window.requestAnimationFrame(runAni);
};

window.requestAnimationFrame(runAni);
