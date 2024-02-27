const { myName, myCars } = require('./multiple-exports');

const myFriendsName = 'Alice';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
module.exports.myGreatCars = myCars;
