const fibonacci = function(num) {
    num = +num;
    if (num > 0) {
        let total = [];
        a = 0;
        b = 1;
        for (let index = 1; index <= num; index++) {
            total.push(a);
            total.push(b);
            a += b;
            b += a;
        }
        return total[num];
    } else {
        return 'OOPS';
    }
};


// Do not edit below this line
module.exports = fibonacci;
