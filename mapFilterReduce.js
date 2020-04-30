// put your code in solution constant
const solution = (array) => {

    array = array.filter((value) => +value).map((value) => +value);

    if(array.length > 1) {
        array = array.reduce((a, b) => a + b);
    } 

    return array * 2;
};

module.exports = solution;

