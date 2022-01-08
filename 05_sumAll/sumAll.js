const sumAll = function(sumStart, sumEnd) {
    let sum = 0;

    if ((sumStart > 0 && sumEnd > 0) &&
     (typeof sumStart == 'number' && typeof sumEnd == 'number')) {
        if (sumStart > sumEnd) {
            sum = sumStart;

            for (let i = 0; i < sumStart; i++) {
                sum+= i;
            }

        } else {
            sum = sumEnd;

            for (let i = 0; i < sumEnd; i++) {
                sum+= i;
            }
        }

        return sum;
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
