const ftoc = function(temp) {
  let newTemp = Number(((temp - 32) * 5/9).toFixed(1))
  return newTemp
};

const ctof = function(temp) {
  let newTemp = Number(((temp * 9/5) + 32).toFixed(1))
  return newTemp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
