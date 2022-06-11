const leapYears = num => {
    if(num % 400 == 0) {
        return true;
    } else if (num % 4 == 0 && num % 100 != 0) {
        return true;
    }
    return false;
};

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
