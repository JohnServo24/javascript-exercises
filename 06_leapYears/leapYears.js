// const leapYears = num => {
//     if(num % 400 == 0) {
//         return true;
//     } else if (num % 4 == 0 && num % 100 != 0) {
//         return true;
//     }
//     return false;
// };


const leapYears = num => {
    return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0);
}

// Return true if the num is divisible by 4
// And the nubmer must be not divisible by 100
// Unless if it is divisible by 400

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
