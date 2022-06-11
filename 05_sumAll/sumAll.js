const sumAll = (num1, num2) => {
    let final = 0;

    if(num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR";
    }
    else if(num1 > num2) {
        for(let i = num2; i <= num1; i++) {
            final += i;
        }
    }
    else {
        for(let i = num1; i <= num2; i++) {
            final += i;
        }
    }

    return final;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;



// Get two numbers
// Declare a variable that stores the final output
// Make a for loop that starts with the smaller number then ends with the larger one
    // If first arg is larger than second param, then make a for loop for that
    // Vice versa but addition
// Return the answer
