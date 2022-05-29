const removeFromArray = function(arr, ...args) {
    return arr.filter(x => args.includes(x) == false)

};

// Do not edit below this line
module.exports = removeFromArray;
