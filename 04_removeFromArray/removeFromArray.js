

const removeFromArray = (arr, ...itemsToRemove) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < itemsToRemove.length; j++) {
            if(arr[i] === itemsToRemove[j]) {
                delete arr[i];
            }
        }
    }

    // let newArray= [];
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] !== undefined) {
    //         newArray.push(arr[i]);
    //     }
    // }

    return arr.filter(item => {return item !== undefined});

};

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