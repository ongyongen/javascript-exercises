// Recursive solution
const fibonacci = function(num) {
    num = Number(num)
    if (num < 0) {
        return "OOPS"
    } else {
        if (num == 1 || num == 2) {
            return 1
        } else {
            return fibonacci(num-2) + fibonacci(num-1)
        }
    }
}


/* Iterative solution 
const fibonacci = function(num) {
    num = Number(num)
    if (num < 0) {
        return "OOPS"
    } else {
        let arr = [];
        let i = 0
        while (i < num) {
            if ((i == 0) || (i == 1)) {
                arr.push(1)
            } else {
                num1 = arr[i-2]
                num2 = arr[i-1]
                arr.push(num1 + num2)
            }
            i += 1
        }
        return arr[num-1]
    } 
}
*/

// Do not edit below this line
module.exports = fibonacci;
