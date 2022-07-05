//1.

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
const [ , , anotherRandomCar ] = cars
//Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)
// console.log(anotherRandomCar)
//This will print out the first one in the array, then the second function will call the second object in the array, I wrote another function that will call the third object in the array.

//2. 

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
// console.log(otherName);
//This one errors because name is not called on properly. It would have to be written as employee.name to work right. The second console log will print Elon

//3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// console.log(password);
// console.log(hashedPassword);
// the first console log will print the constant password 12345 because it is defined outside of the function. The second console.log will error because the key "person" does not have a password

//4. 
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// console.log(first == second);
// console.log(first == third);
// The console logs are asking a question is first equal to second and will return true or fals. The first will show false because it compares the number 2 to 5. The second will show true because it compares the number 2 to the 9th position which is also 2

//5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// The output would be Value. Then 1,5,1,8,3,3. Then 1. Then 5









