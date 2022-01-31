/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */

function transpose(array) {
  const result = [];
  const arrayI = array[0].length;
  const arrayJ = array.length;
  for (let i = 0; i < arrayI; i++) {
    let resul = [];
    for(let j = 0; j < arrayJ; j++) {
      resul.push(array[j][i])
    }
  result.push(resul)
  }
// console.log(result)
return result;
}



transpose([
  [5, 12, 17, 9, 3],
  [13, 4, 8, 14, 1],
  [9, 6, 3, 7, 21],
]);
module.exports = transpose;
