const repeatString = (string, num) => {
    if(num == 0) return "";
    else if (num < 0) return 'ERROR';

    let finalOutput = string;
    for(let i = 0; i < num - 1; i++) {
        finalOutput += string;
    }

    return finalOutput;
};

console.log(repeatString('hey', 0));

// Do not edit below this line
module.exports = repeatString;


// Get string
// Get number
// Multiply string by the amount of numbers
    // Set a variable to store the final output
    // Run a loop
        // Concatenate the string to output
        // Do this n times
// return string
