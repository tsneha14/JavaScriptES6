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