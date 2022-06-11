

// const removeFromArray = (arr, ...itemsToRemove) => {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < itemsToRemove.length; j++) {
//             if(arr[i] === itemsToRemove[j]) {
//                 delete arr[i];
//             }
//         }
//     }

//     // let newArray= [];
//     // for(let i = 0; i < arr.length; i++){
//     //     if(arr[i] !== undefined) {
//     //         newArray.push(arr[i]);
//     //     }
//     // }

//     return arr.filter(item => {return item !== undefined});

// };


const removeFromArray = (...args) => {
    let array = args[0];

    let newArray = [];

    // If the array items are not in the arguments of the user
    // Input it to new array
    // ...args basically gives us an array of values from the user
    // The value after the first value (args[0]) is the values to be removed from the array
    // So if the values after args[0] is inside args[0], then we remove them
    // In this case, we did the reverse.
    // If the values inside of args[0] is not a value of the values after args[0]
    // Then we include it to the new array
    // If the values inside of args[0] cannot be found in the values after args[0],
    // Then it is a value that shouldn't be removed since the values after args[0] are to be removed
    // We create a new array and we will just not include the values after args[0] instead of deleting them
    array.forEach(items => {
        if(!args.includes(items)) {
            newArray.push(items);
        }
    });

    return newArray;
}

let test = [1, 2, 3, 4];
test = removeFromArray(test, 3, 2);

console.log(test);

// Do not edit below this line
module.exports = removeFromArray;

// -- removeFromArray
// Get array & the item to be removed
// Remove item from array
    // Traverse through the array
    // If we find the item to be removed get the index
    // Use splice to remove the array
// Return array