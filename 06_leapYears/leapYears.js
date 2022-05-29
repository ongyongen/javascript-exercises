const leapYears = function(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

/* Method
leap year : 
- divisible by 4 and not divisible by 100
- divisible by 400 (divisible by 4, divisible by 100, divisible by 400) 
  (ie if it is divisible by 400, means it is divisible by 4 and 100)
*/ 

// Do not edit below this line
module.exports = leapYears;

