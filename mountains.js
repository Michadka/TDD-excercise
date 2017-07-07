function mountain(heights) {
  return Math.max.apply(Math, heights);
}

module.exports = mountain;
