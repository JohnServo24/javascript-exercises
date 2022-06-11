const ftoc = num => {
  return parseFloat(((5/9) * (num - 32)).toFixed(1));
};

const ctof = num => {
  return parseFloat((((9/5) * num) + 32).toFixed(1));
};


console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
