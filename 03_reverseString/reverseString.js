const reverseString = str => {
    let finalOutput = "";
    for(let i = str.length - 1; i >= 0; i--) {
        finalOutput += str[i];
    }
    return finalOutput;
};

console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;

// Get string
// Reverse it
    // Create a new variable for the final output
    // Create a for loop starting with the last letter
        // put the letters on the final output variable
// Return
// Output
