// // spread opertor

// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]

// const arr3 = [...arr1 , ...arr2]

// console.log(arr3);

// // rest  operator

// function sum(...numbers){
//     let total = 0;
//     for (let num of numbers) {
//         total += num;
//     }
//     return total;
// }
// console.log(sum(1, 2, 3, 4, 5));

// // closure

// function outerFunction() {
//     let count = 0;

//     function innerFunction()  {
//         count++;
//         console.log(count);
//     }
//     return innerFunction;
// }
// const counter = outerFunction();
// counter();

// // immdiately invoked function expression (IIFE)

// (function() {
//     console.log('this is only run once');
// })();

// // self invoking function expression (SIFE)

// (function() {
//     console.log("this is once run");
// })();

// // high order function

// function higherOrderFunction(callback) {
//     console.log("before callback");
//     callback();
//     console.log("after callback");
// }
// higherOrderFunction(function() {
//     console.log("this is callback function");
// });

// // destructing array
// const arr1 = [10, 20, 30]
// const [a, b, c] = arr1;
// console.log(a, b, c);

// // destructing object

// const person = {

//     name: "john",
//     age : 30,
//     city : "new york"

// }

// const { name, age, city} = person;
// console.log(name, age, city);

// //  5 example of double = and triple =

// 1. number and string

console.log(5 == '5');
console.log(5 === '5');

// 2, null and undefined

console.log(null == undefined);
console.log(null === undefined);

// 3. boolean and number

console.log(true == 1);
console.log(true === 1);

// 4. object and string

const obj = { name: "tanish"};
console.log(obj == '[object Object}');
console.log(obj === '[object Object]');

// 5. array and string

const arr = [1, 2, 3]
console.log(arr == '1, 2, 3');
console.log(arr === '1, 2, 3');
