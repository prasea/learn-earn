
//Example of Iterators
function nameIterator(names){
    let nextIndex = 0;
    
    return {
        next : function() {
            return (nextIndex < names.length) ? 
                { value : names[nextIndex++], done : false} : 
                { done : true }; 
        }
    }
}

const namesArr = ['Jack', 'Rose', 'Danny'];

// Initialise the Iterator & pass names Array.
const names = nameIterator(namesArr)

console.log(names); //names is an Object Whose Key is next() function.

console.log(names.next()) // {value: "Jack", done : false}
console.log(names.next());
console.log(names.next());
console.log(names.next());






// let val;
//     let nextIndex = 0;
//     val = nextIndex++; //As Postfix incrementor returns the value before incrementing. So 0 is returned before it is incremented to 1. Thus, val is 0 & nextIndex++ is 1.
// console.log(val);
// console.log(nextIndex++);
