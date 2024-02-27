const {
    myName,
    myCars,
    myCarPlate,
} = require('/Users/msstvv/Desktop/Node/03-commonjs-modules/multiple-exports.js');
const greeting = require('./my-moduls/single-export.js');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatCars,
} = require('./export-and-import');

//import from multiple-exports file

console.log(myName);
console.log(myCars);
console.log(myCarPlate);

myCars.push('GLS');

//import from single-export file

greeting(myName);

// import from export-and-import file

console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatCars);
