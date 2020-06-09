const http = new easyHttp();

// http.get('https://jsonplaceholder.typicode.com/users')
    // .then(user => console.log(user));

const data = {
    name : 'Prajanya Shrestha',
    username : 'Prasea7',
    email : 'prajanya.stha7@gmail.com'
}
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(user11 => console.log(user11));

// http.put('https://jsonplaceholder.typicode.com/users/2',data)
//     .then(user2 => console.log(user2));

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(user2 => console.log(user2))
