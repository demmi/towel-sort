
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  }
    a = [];
  for (let i=0; i < matrix.length; i++) {
    if (i % 2) {
      a = a.concat(matrix[i].reverse());
    }
    else {
      a = a.concat(matrix[i]);
    }
    
  }
  return a;
}
