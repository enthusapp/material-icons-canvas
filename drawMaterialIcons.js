const hexToRgb = gr => {
  const cs = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(gr);
  const r = parseInt(cs[1], 16);
  const g = parseInt(cs[2], 16);
  const b = parseInt(cs[3], 16);
  return [r, g, b];
};

const addOpacity = (color, opacity = 1) => {
  const ca = Array.isArray(color) ? color : hexToRgb(color);
  return `RGB(${ca[0]}, ${ca[1]}, ${ca[2]}, ${opacity})`;
};

module.exports = (context, { pathData, x, y, scale, color }, opacity) => {
  context.save();
  context.translate(x, y);
  context.fillStyle = addOpacity(color, opacity);
  context.scale(scale, scale);
  context.fill(new Path2D(pathData));
  context.restore();
};
