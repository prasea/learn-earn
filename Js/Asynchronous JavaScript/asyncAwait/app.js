// function myFunc(){
//     return 'Hello';
// }

function myFunc1(){
    return Promise.resolve('Hello explicitly using Promise.resolve()');
}
async function myFunc2(){
    return 'Hello From async only';
}
// Both myFunc1() & myFunc(2) returns Promise
console.log(myFunc2())
// myFunc1().then( res => console.log(res));


async function myFunc(){
    const promise = new Promise( (resolve,reject) => {
        setTimeout( () => {
            resolve('Hello Dear');
        },3000);
    });
    
    // The keyword await makes JavaScript wait until that promise settles and returns its result
    // alert(await promise);
    // alert(promise);

    // return promise;


    const error = false;
    if(!error){
        return await promise;
    } else{
        return await Promise.reject(new Error('Somthing Missing'));
    }
}
// console.log(myFunc());
myFunc()
    .then( value => console.log(value))
    .catch( err => console.log(err))


/* This Way produces UNDEFINED. We need to Wrap fetch() in Promise
function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => user);
}
*/

function getUsers(){
    return new Promise( (resolve,reject) =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(user => resolve(user));
    })
}
function getUsers(){
    
    // console.log(fetch('https://jsonplaceholder.typicode.com/users'));
 

    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => console.log(res));
 

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
}

async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // res is Equivalent to First .then() in above getUsers()
    const data = await res.json();
    // data is Equivalent to Second .then() in above getUsers()
    return data;

}


// getUsers();
// console.log(getUsers())
getUsers().then(user => console.log(user));
    
