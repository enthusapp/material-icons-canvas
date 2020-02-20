module.exports =(context, { svgData, x, y, width, height, color }) => {
  const svgInput = svgData
    .replace(/path/g, `path fill="${color}"`)
    .replace(/width="48"/g, `width="${width}"`)
    .replace(/height="48"/g, `height="${height}"`);

  const img = new Image();
  img.src = URL.createObjectURL(new Blob([svgInput], { type: "image/svg+xml" }));
  img.onload = () => {
    context.drawImage(img, x, y);
  };
};
