// put your code in solution constant
const solution = (array) => {
    
    let newArray = array.filter((value) => +value);
    let newValue = 0;   

    for(let i = 0; i < newArray.length; i++) {
        newValue += newArray[i]*2;
    }

    return newValue;
};

module.exports = solution;

