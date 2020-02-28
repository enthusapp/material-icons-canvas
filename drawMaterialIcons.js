module.exports = (context, { pathData, x, y, scale, color }) => {
  context.save();
  context.translate(x, y);
  context.fillStyle = color;
  context.scale(scale, scale);
  context.fill(new Path2D(pathData));
  context.restore();
};
