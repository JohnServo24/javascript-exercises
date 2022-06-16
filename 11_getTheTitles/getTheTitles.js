// USING map
// const getTheTitles = arr => {
//     return arr.map(item => item.title);
// };

// Without methods
// const getTheTitles = arr => {
//     let newArr = [];
//     arr.forEach(item => newArr.push(item['title']));

//     return newArr;
// };

// Using regular for loop
const getTheTitles = arr => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]["title"]);
    }

    return newArr;
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
