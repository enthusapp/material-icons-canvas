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
