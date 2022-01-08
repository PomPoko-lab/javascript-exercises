const leapYears = function(year) {

    if (!(year % 4 == 0)) {
        return false;
    } else if ((year % 100 == 0) && (!(year % 400 == 0))) {
        return false;
    } else {
        return true;
    }

    

/*
divisible by 4
not divisible by 100 is leapyear
divisble by 400 is leapyear
*/
};

// Do not edit below this line
module.exports = leapYears;
