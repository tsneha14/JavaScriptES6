//const
const firstAge = 6;
firstAge = 8; //gives error as const func cannot be changed

const childAges = [5, 6, 8, 10];
childAges = [5, 6, 8, 10, 12];  //gives error as const func cannot be changed
childAges.push(12); //instead we can use push to update the array
console.log(childAges);

const personObj = {name: 'Nabendu', skill: 'JS'};
personObj.skill = 'React';
personObj.profession = 'Developer';
console.log(personObj);

//Default Parameters
const isEqual = (num1, num2=20) => {
    console.log(num1);
    console.log(num2);
    return num1 === num2;
}
console.log(isEqual(10));
console.log(isEqual(10, 10));

//Object Literals Extensions
let name = 'Nabendu';
let age = 40;
let obj = {
    name: name, //if the key name and variable name are same, we can just use one name as shown below (age)
    age
}
console.log(obj);

//Dynamic Fields
let ageField = 'age';
let es6Obj = {
    name: 'Shikha',
    [ageField]: 40
}
console.log(es6Obj);

//Rest Operators
let arrFunc = (...arr) => {
    console.log(arr)
}
arrFunc(23, 12, 45, 54, 32, 89, 72);

let restFunc = (a, b, ...n) => {
    console.log(a, b);
    console.log(n)
}
restFunc(12, 45, 54, 32, 89)

//Spread Operator
let a = [23, 12, 45, 54, 32, 89, 72];
console.log(Math.min(23, 12, 45, 54, 32, 89, 72));
console.log(Math.min(...a));
console.log(Math.max(...a));

//Copying Problem - Copy of Reference
let x = [54, 32, 89, 72];
let y = x;
y.push(12);
console.log(x);
console.log(y);

//Solution with Spread
let c = [23, 12, 45, 54];
let d = [...c];
d.push(13);
console.log(c);
console.log(d);

//Merging with spread
let x1 = [1, 2], a1 = [3, 4], c1 = [9, 10];
let d1 = [...x1, ...a1, ...c1];
console.log(d1);

//Used in Objects
let obj1 = { foo: 'bar', x: 42 }, obj2 = { foo: 'baz', y: 13 };
let clonedObj = {...obj1}
console.log(clonedObj)

let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj)

//Array Destructuring
const sgb = [255, 200, 0];
// const s = sgb[0];
// const g = sgb[1];
// const b = sgb[2];

// simple way
const [s, g, b] = sgb;
console.log(s, g, b);

//Using Spread operator
const even = [2, 4, 6, 8, 10];
const [first, second, ...arr] = even;
console.log(first)
console.log(second)
console.log(arr)

//Skipping items
const hex = ['#fff', '#000', '#678'];
const [white, black,] = hex; //need commas as arrays follow order
console.log(white)
console.log(black)

//Object destructuring
const developer = {
    firstname: 'Nabendu',
    lastname: 'Biswas',
    country: 'India'
  };
// const firstname = developer.firstname;
// const lastname = developer.lastname;
// const country = developer.country;

// simple way
const { firstname, lastname, country } = developer;
console.log(firstname, lastname, country);

//Skipping items
const student = {
    name1: 'Hriday',
    lname: 'Biswas',
    coun: 'India'
   };
const { name1, coun } = student; //no need of commas as in array destructuring objects do not have order
console.log(name1, coun)

//ES6 classes
class CreateRoom {    // class names are written in PascalCase whereas functions are written in camelCase in JS
    constructor(name){
        this.room = `${name}'s room`;
    }
    cleanRoom(soap){
        console.log(`Cleaning ${this.room} with ${soap}`)
    }
}
const nabsRoom = new CreateRoom('Nabendu'); //creating object instance
const shikhaRoom = new CreateRoom('Shikha');

nabsRoom.cleanRoom('Domex'); //calling the method inside the object class
shikhaRoom.cleanRoom('Lizol');

//Classical for loop
let family = [ 'Nabendu', 'Shikha', 'Hriday' ];
for(let i=0; i<family.length; i++){
    console.log(family[i])
}

//simple way
family.forEach(member => console.log(member)) //forEach does not return any result

//Map use case
let numbers1 = [6, 8, 10];
let doubledNums = [];
for(let i=0; i<numbers1.length; i++){
    doubledNums.push(numbers1[i] * 2)
}
console.log(doubledNums)

//simple way
let doubled = numbers1.map(num => num * 2); //since map returns the result, we must store that result in a variable (here, numbers1) and stores all those results in a new array (here, doubled)
console.log(doubled);

//filter use case
let products = [
    { name: 'Samsung M21', category: 'smartphone'},
    { name: 'Samsung M31', category: 'smartphone'},
    { name: 'Macbook Air', category: 'laptop'},
    { name: 'Asus Zenbook', category: 'laptop'}
];
let filteredProducts = [];
for(let i=0; i<products.length; i++){
    if(products[i].category === 'smartphone'){
        filteredProducts.push(products[i])
    }
}
console.log(filteredProducts)

//simple way
let filtered = products.filter(item => item.category === 'laptop');
console.log(filtered)

//find use case
let users = [
    {name: 'Nabendu'},
    {name: 'Shikha'},
    {name: 'Hriday'},
    {name: 'Mausam'},
    {name: 'Hari'},
    {name: 'Sneha'},
    {name: 'Hriday'}
];
let user;
for(let i=0; i<users.length; i++){
    if(users[i].name === 'Hriday'){
        user = users[i];
    }
}
console.log(user)

//simple way
let es6User = users.find(user => user.name === 'Sneha');
console.log(es6User)

//some and every
let devices = [
    { name: 'Samsung M21', category: 'smartphone', ram: 4},
    { name: 'Samsung M31', category: 'smartphone', ram: 6},
    { name: 'Macbook Air', category: 'laptop', ram: 8},
    { name: 'Asus Zenbook', category: 'laptop', ram: 16}
];

// //every
const allDevicesCode = devices.every(device => device.ram >= 6);
console.log(allDevicesCode);

// //some
const someDevicesCode = devices.some(device => device.ram >= 6);
console.log(someDevicesCode);

//Classic use case of reduce
let numbers = [20, 30, 40];
var sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

//simple way
const sumReduce = numbers.reduce((acc, curr) => {
    return acc + curr
}, 0)

//output will be as below
// 0 + 20 = 20
// 20 + 30 = 50
// 50 + 40 = 90
console.log(sumReduce)