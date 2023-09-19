const testOne = ['a', 'b', 'c'];
const testTwo = [1, 2, 3];
function zipList(numOne, numTwo) {
  const arr = [];
  if (numOne.length === numTwo.length) {
    for (let i = 0; i < numOne.length; i++) {
      arr.push(numOne[i]);
      arr.push(numTwo[i]);
    }
  }
  return arr;
}
console.log(zipList(testOne, testTwo));

function zipListTheSimpleWay(numOne, numTwo) {
  return _.flatten(_.zip(numOne, numTwo));
}
console.log(zipListTheSimpleWay(testOne, testTwo));
