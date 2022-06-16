const findTheOldest = arr => {
    const subtracted = arr.sort((a,b) => {
        // If the person is still alive
        if(a.yearOfDeath === undefined) a.yearOfDeath = 2022;
        if(b.yearOfDeath === undefined) b.yearOfDeath = 2022;

        // Sums up the age/years of living and compares it in descending order
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) return -1;
        else return 1;
    });

    // returns the "oldest living" one
    return subtracted[0];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
