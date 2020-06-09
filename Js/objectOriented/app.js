// const birth = new Date('7-8-1999');
// const curr = Date.now();
// const diff = curr - birth;

// const ageDate = new Date(diff);
// // console.log(ageDate.getUTCFullYear() - 1970) 

// console.log(ageDate );

// Cretaing Primitive type Data using Built-in Constructor
const name1 = 'Jack';
const name2 = new String('Jack');
// console.log(name2);
// console.log(typeof name2);
//Problem of using Constructor to intialize primitive data type is in Comparision using Triple Equal.
// if(name2 === 'Jack'){
// 	console.log('Yes');
// }	else{
// 	console.log('No');
// }

const num1 = 5;
const num2 = new Number(5);
// console.log(num2);
// console.log(typeof num2);

const bool1 = true;
const bool2 = new Boolean(true);
// console.log(bool2);

const getSum1 = function(x,y){
	return x+y;
}
const getSum2 = new Function('x', 'y', 'return x+y');
console.log(getSum2(2,1)); 


// Regular expression is Wrapaped inside two forward Slashes
const re1 = /\w+/; //Looking at word character that occurs more than once.
// const re2 = new RegExp('\w+'); won't create the Same as we did above. We need to Escape Character. So,
const re2 = new RegExp('\\w+');
// console.log(re2);
