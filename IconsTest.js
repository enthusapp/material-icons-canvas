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

drawImage(ctx, icons.store, { x: 100, y: 0, width: 40, height: 60, color: "#f0f"});
drawImage(ctx, icons.cloud, { x: 0, y: 0, width: 40, height: 60, color: "#00f"});