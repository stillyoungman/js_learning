// put your code in solution constant
const solution = (array) => array.filter((value) => +value).map((value) => +value).reduce((a, b) => a + b, 0)  * 2;


module.exports = solution;

