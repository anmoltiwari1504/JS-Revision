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



// --------------------------------- Conditional Statement ---------------------------------------------------


//conditional statement is used for check the condition is true or false

// there are two types - 1. If/else-if & else 2.Switch Case

// 1.if / else -if & else
  

// let battery = 10;

// if (battery === 100) {
//   console.log("Battery full");
// }

// else {
// console.log('Battery is not full')
// }



//Question -
// Check whether the three variable are equal or not?
// let num1 = 3;
// let num2 = 3.3;
// let num3 = 3.3;

// if (num1 == num2 && num2 == num3) {
//   console.log("All Variable are equal")
// }

// else if (num1 == num2) {
//   console.log("Num1 and num2 are equal");

// }
// else if (num2 == num3) {
//   console.log("Num2 and num3 are equal")
// }

// else if (num1 == num3) {
//   console.log("Num1 and Num3 are equal");

// }
// else {
//   console.log("All number are not equal to each other")
// }



//switch case

// let day = 1;

// switch(day) {
//   case 1:
//     console.log("Today is monday!");
//     break;
//   case 2:
//     console.log("Today is tuesday!");
//     break;
  
//   case 3:
//     console.log("Today is wednesday!");
//     break;
//   case 4:
//     console.log("Today is thrusday!");
//     break;
  
//   case 5:
//     console.log("Today is friday!");
//     break;
  
//   case 6:
//     console.log("Today is saturday!")
//     break;
  
//   case 7:
//     console.log("Today is sunday!");
//     break;
  
//   default:
//     console.log("This is not a day!")
// }



// --------------------------------Array and its method--------------------------------------------


// Array is the well defined collection of the similar and different type of data is denoted by [], and each and every element is seperated by , and each and every element have their own unique id which is called index value


// let arr = [10, 40, 50];
// console.log( arr[2])

//The question is that why we use array - we use array to hold mutiple type of data so we can perform some operation on that total

// let mutiarr = [
//   [10, 20, 40, 50, 60],
//   ["Anmol", "Ram", "Avinash"],
//   ["@", "%", "&", "*"],
//   [true, true, false, true]
// ]
// console.log(mutiarr[0][3])



// Array methods----

// 1.sort - used to sort the array in  ascending order (Depend weather the array is number or string)

// let arr = [2, 5, 7, 3, 7];
// arr.sort();

// console.log(arr)


//2.reverse - It is used to reverse the array

// let arr = [2, 5, 7, 3, 7];
// arr.reverse();
// console.log(arr)


//3.push() - It is used to insert the element from the end of the array.

// let arr = [2, 5, 7, 3, 7];
// arr.push(20, 30);
// console.log(arr)


//4.pop() - It is used to remove the element from the end of the array.
// let arr = [2, 5, 7, 3, 7];

// arr.pop()
// arr.pop()
// console.log(arr)


//5.shift() - Used to delete and remove the element from the starting of the array.

// let arr = [2, 5, 7, 3, 7];
// arr.shift()
// console.log(arr)

//6.unShift() - used to insert the element form the starting of the array.

// let arr = [2, 5, 7, 3, 7];
// arr.unshift(3,5)
// console.log(arr)

//7.slice - used to cut the peiece of any array and return the new array.

// let arr = [2, 5, 7, 3, 7];
// let newarr = arr.slice(0, 4)
// console.log(newarr)

//8.splice - used to insert , update and remove the element from the array.

// let arr = [2, 5, 7, 3, 7];
// let newarr = arr.splice(2, 2, 40, 50);
// console.log(arr)
// console.log(newarr)

//9. concate - used to merge two or more different array.

// let arr = [2, 5, 7, 3, 7];
// let arr1 = [2, 5, 7, 3, 11];
// let concat = arr1.concat(arr)
// console.log(concat)


//10join- used to join each and every element in the array and return new array with the string.
// let arr = [2, 5, 7, 3, 7];
// let newarr = arr.join(",");
// console.log(newarr)

//11.isArray - used to find weather the input is array or not.

// let arr = [2, 5, 7, 3, 7];
// console.log(arr);
// if (Array.isArray(arr)) {
//   console.log("This is an array");

// }

// else {
//   console.log("this is not a array")
// }

// 12.indexOf - used to find the index of any element of an array.

// let arr = [2, 5, 7, 3, 7];
// let last_index = arr.indexOf(7)
// console.log(last_index)

//13. lastIndexOf - used to find the last index of any element of an array.

// let arr = [2, 5, 7, 3, 7];
// let last_index = arr.lastIndexOf(7);
// console.log(last_index)


//14.Include -used to find the value is in the array or not.

// let arr = [2, 5, 7, 3, 7];
//  let check = arr.includes(5);
// console.log(check)


// callback function - A function when  is involked witn in a function or an anonymous function.

// 15.some()

// let arr = [2, 5, 7, 3, 7 , 20 ,50,60,10];
// let value = arr.some((ele) => {
//   return ele >= 18
// })
// console.log(value)

//16.every()

// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10];

// let value = arr.every((ele) => {
//   return ele >= 18;

// })
// console.log(value)


//17.find() - used yo find the element in an array on certain condition.


// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10]
// let find = arr.find((ele) => {
//   return ele>= 21
// })
// console.log(find)


//18.findIndex() - used to findindex of the element appears first in an array by statisfying the conditions.

// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10]
// let index = arr.findIndex((ele) => {
//   return ele >= 18
// })
// console.log(index)


//19.fiter() - used to filter out the element on the basis of a certain condition.


// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10]
// let filter = arr.filter((ele) => {
//   return ele >= 18;

// })
// console.log(filter)


//20forEach() - used to iterate each and every ele of array.


// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10]
// arr.forEach((ele, ind)=> {
//   console.log(ele)
//   console.log(ind)
// })



//21. map() - used to modify an existing array and return the same array.

// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10]

// let value = arr.map((value, ind) => {
//   console.log(value);
//   console.log(ind)
//   return value *20
// })
// console.log(value)


// 22.reduce() - used to reduce all the element present in the array by a single value or unit.


// let arr = [2, 5, 7, 3, 7, 20, 50, 60, 10]
// let single_value = arr.reduce((pre, curr) => {
//   return pre + curr
// })
// console.log(single_value);


// ------------------------Function -------------------------

// the bunch or the collection of code that will perform some operation or task at a specific time.
// it is reusable component in js
// executing a function two step 1. declaring a function 2.calling a function

//classification of function is according to me is -
// 1. Standard function
//2. parametric function
//3. function with return value


// Standard function

// function add() {
//   let a = 20;
//   let b = 30;
//   let sum = a + b;
//   console.log(sum)
// }

// add()


// Parametric function

// function add(a, b) {
//   let sum = a + b;
//   console.log(sum);
// };
// add(2,3)




// function with return value


function add(a, b) {
  return a + b;
};
console.log(add(55,676))