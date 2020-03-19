
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!Array.isArray(matrix)){
    return []
  }

  result = []
  matrix.forEach((element, index) => {
    if (index % 2 == 1) {
      element.reverse();
    }
    element.forEach(nubmer => {
      result.push(nubmer);
    });
  });
  return result;
}