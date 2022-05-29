const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR"
    }
    else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else {
        let smaller = num1 < num2 ? num1 : num2
        let bigger = num1 < num2 ? num2 : num1
        let res = smaller
        let i = smaller
        while(i < bigger) {
            i += 1
            res += i 
        }
        return res
    }
};

// Do not edit below this line
module.exports = sumAll;
