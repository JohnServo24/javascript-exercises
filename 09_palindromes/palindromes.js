// ***NORMAL WAY***
// const palindromes = a => {
//     // stores the sentence and lowercases it
//     const lowered = a.toLowerCase();

//     // removes anything that isn't a letter from the original
//     let newString = "";
//     for(let i = 0; i < lowered.length; i++) {
//         // If the character is a letter, store it. Otherwise do not store it
//         if((lowered[i] >= 'a' && lowered[i] <= 'z') || (lowered[i] >= 'A' && lowered[i] <= 'Z')) newString += lowered[i];
//         else continue;
//     }

//     // reverses the sentence
//     let reversed = "";
//     for(let i = newString.length - 1; i >= 0 ; i--) {
//         reversed += newString[i];
//     }

//     // compares the original and the reversed string
//     if(newString === reversed) return true;
//     return false;
// };


// ***USING METHODS***
const palindromes = a => {
    // Turn the string into an array
    const arr = [...a];
    // Filter the array. Must only include letters
    const filteredArr = arr.filter(item => (item >= 'a' && item <= 'z') || (item >= 'A' && item <='Z'));
    // Turn everything into lowercase and turns it into a string
    const loweredArr = filteredArr.map(item => item.toLowerCase()).join("");
    // Turns loweredArr into an array again so that it can be reversed, and turns it into a string again
    const reversedArr = [...loweredArr].reverse().join("");
    // --> must copy the contents of loweredArr otherwise it will reverse the original loweredArr too
    // Without the ... it will point to the same memory as loweredArr which is why it will change

    // If the reversed array is equal to the main array, then it is a palindrome
    if(loweredArr === reversedArr) return true;
    return false;
};

a = 'ZZZZ car, a man, a maracaz.';
console.log(palindromes(a));

// Do not edit below this line
module.exports = palindromes;
