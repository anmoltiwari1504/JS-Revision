//variable

  
//variable is a container that store or consume some data and value respectively variable is defined into three types which is 1.let 2.var 3.const

//var - var allows us or variable to re-declare & re-assign
// Ex -

// var num = 29;
// var num = 0  // re-declare
// num = 1      // re-assign
// console.log(num)

//let - let allows us or variable to not re-declare but re-assign
// let num = 9;
// num = 0;  // Re-assign
// console.log(num)

// const = const allows us or variable to not re-declare or not re-assign

// const num = 20;
// console.log(num)

// Data-Types

// The types of data is stored in the variable it is known as the datatypes. There are two types of data which is, Primitive data types and non-primitive data types
// Primitive data-types - number , string , boolean , undefined , null
// Reference data-types - Array , object

//Primative data-types

//number

// let num = 20;
// console.log(num);
// console.log(typeof(num))

//string

// let name = "Anmol";
// console.log(name)
// console.log(typeof(name))

//boolean

// let value = true;
// console.log(value);
// console.log(typeof(value))

//undefined

// let name;
// console.log(name)
// console.log(typeof(name))

//null

// let name = null
// console.log(name)
// console.log(typeof(name))

//Refernce data-types

//Array - It is a well defined collection of the similar and different types of data that store in the variable, and each and every element is seperated by comma(,), and enclosed by [] braces , and it has index value which is unique value and it length from 0 to array.length-1.


// let arr = [10, 20, 30, 40];
// console.log(arr)
// console.log(arr.length)


//Object - It is a well defined collection of the similar and different types of data that store in the variable, but it have key & value pair, enclosed in {} braces and just like array each and every element is seperated by(,);

// let obj = {
//   key: "value "
// }

// let carDetails = {
//   name: "mercedes",
//   price: " 20lakh",
//   model: 2026,
//   engine: "Hybrid",
  
// }

// console.log(carDetails.price)


//-------------------------------------------------operators-------------------------------------------------

// operation - It is a task or a procedure for a specific program which uses some operators to perform operation
//operands -  are value or term on which apply operation
//operator - are symbols to perform operation between two or more operands.

//1.Arthmatic operators
//2.Assignment operators
//3.Comparison operators
//4.Logical operators
//5.Ternary operators

// 1.Arithmatic operators  ---> + ,- , * ,/, %, **

// let num1 = 20
// let num2 = 30
// document.write(num1 + num2);

// let num1 = 30
// let num2 = 20
// document.write(num1 - num2)

// let num1 = 20;
// let num2 = 2;
// document.write(num1 * num2)


// let num1 = 20;
// let num2 = 2;
// document.write(num1 / num2)

// let num1 = 20;
// let num2 = 2;
// document.write(num1 % num2)

// let num1 = 20;
// let num2 = 2;
// document.write(num1 ** num2)


//2.Assignment operator ----> =,+= , -= , *= , /= , %= , **=

// let num1 = 20;
// let num2 = num1;
// console.log(num2)

// let num1 = 20
// let num2 = 30;
// num1 += num2;
// console.log(num1)
// console.log(num2)

// let num1 = 20
// let num2 = 30;
// num1 -= num2;
// console.log(num1)
// console.log(num2)


// let num1 = 20
// let num2 = 30;
// num1  *= num2;
// console.log(num1)
// console.log(num2)

// let num1 = 20
// let num2 = 30;
// num1 /= num2;
// console.log(num1)
// console.log(num2)

// let num1 = 20
// let num2 = 30;
// num1 %= num2;
// console.log(num1)
// console.log(num2)

// let num1 = 20
// let num2 = 30;
// num1 **= num2;
// console.log(num1)
// console.log(num2)

//3.Comparison operator - == , === ,> , < , >= , <=

  // let num1 = 20;
  // let num2 = 30;
// console.log(num1 == num2)
// console.log(num1 === num2)
// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 >= num2)
// console.log(num1 <= num2)


//4.Logical operator - && , || , !

// let num1 = 20;
// let num2 = 23;
// let num3 = 23;

// console.log(num1 < num2 && num1 === num2);
// console.log(num1 < num2 ||   num1 === num2);

//5. Ternary operator

// let age = 20;
// let result = age >= 18 ? "ADULT" :"TEENAGER"
// console.log(result)


// Control Flow Statement

//loop => Loop in javascript is used to repeat a piece of code multiple times until a condition become false.


//types of loops

//while
//do-while
//for
//for of loop
//for in loop

//1.for loop - when you know how many times you want to repeat.

// let number = 100;
// for (let i = 1; i < number; i++){
//   console.log(i)
// }

//2. While loop - while loop is run when the condition is true.

// let number = 5;
// while (number <= 5) {
//   console.log("Hello this is while loop")
//   number++
// }

// do-while loop - Runs at once, even if the condition is false.

// let number = 1;
// do {
//   console.log(number)
//   number++;
  
// }

// while (number <= 5)


//for of loop - use mainy to get value from an array/string.

// let fruits = ["Mango", "Banana", "Apple"];
// for (let fruit of fruits) {
//   console.log(fruit)
// }


// for in loop - used mainly for keys/properties of an object.

// let student = {
//   name: "Anmol",
//   age: 20,
//   course: "BTech",
  
// };

// for (let key in student) {
//   console.log(student[key])
// }