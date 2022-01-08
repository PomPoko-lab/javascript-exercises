const removeFromArray = function(array, ...remove) {

    for (arg of remove) {
        if (array.includes(arg)) {
            array.splice(array.indexOf(arg),1);
        }
    }
    
    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
