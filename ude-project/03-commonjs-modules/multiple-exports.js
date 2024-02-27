const myName = 'Stan';
const myCars = ['Audi A6', 'MB C200'];
const myCarPlate = 6958;

console.log('Text from the multiple-exports CommonJS module');
console.log(__filename);

module.exports.myName = myName;
exports.myCars = myCars;
module.exports.myCarPlate = myCarPlate;
