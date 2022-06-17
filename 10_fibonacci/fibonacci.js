// I heard that I can solve this problem with recursion but I don't know how lmao


const fibonacci = num => {
    if(num < 0) return "OOPS";
    // else if(typeof num === "string") num = parseInt(num);
    // javascript converts strings into numbers


    let fibonacci = [1, 1]; // First two numbers to be added later

    // -2 because we already have 2 items on the array
    // For ex. if we want to get the 20th num then if no -2
    // it will get us the 22nd num
    for(let i = 0; i < num - 2; i++) {
        // Add the prev and next num
        fibonacci[2 + i] = fibonacci[i] + fibonacci[i + 1];
    }

    // returns the last number from the array which is what we are looking for
    return fibonacci[fibonacci.length - 1];
};

console.log(fibonacci("8"));
// Do not edit below this line
module.exports = fibonacci;

// [0, 1]
// Start with 0 + 1
// Result is 1 (0 + 1) 
// [0, 1, 1]
// Add result to prev num (1)
// Result is 2 (1 + 1)
// [0, 1, 1, 2]
// Add result to prev num (1)
// Result is 3 (2 + 1)
// [0, 1, 1, 2, 3]
// Add result to prev num (2)
// Result is 5 (3 + 2)
// [0, 1, 1, 2, 3, 5]
// Add result to prev num (3)
// Result is 8 (3 + 5)
// [0, 1, 1, 2, 3, 5, 8]
// Continue
