function reactArea(len, wid) {
  return len * wid;
}

function squareArea(side) {
  return side * side;
}

function circle(rad) {
  return Math.PI * rad * rad;
}

module.exports = {
  reactArea,
  squareArea,
  circle,
};
