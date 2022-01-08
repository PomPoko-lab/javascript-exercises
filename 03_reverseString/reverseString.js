const reverseString = function(str) {
    let combine = [];

    for (let i = 0; i < str.length; i++) {
        combine.push(str[i]);
    }
    
    combine.reverse();

    return combine.join('');
};

// Do not edit below this line
module.exports = reverseString;
