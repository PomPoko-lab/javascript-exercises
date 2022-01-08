const ftoc = function(num) {
  let conversion = (num - 32)/1.8;

  return Math.round(conversion * 10) / 10;

};

const ctof = function(num) {
  let conversion = (num * 1.8) + 32;

  return Math.round(conversion * 10) / 10;

};

/* 
32 fahrenheit to 1 C

rounded to .1
*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
