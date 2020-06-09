const http = new easyHttp();

// http.get('https://jsonplaceholder.typicode.com/users', function(data){
//     console.log(data);
// });

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err =>console.log(err));

const output = document.getElementById('output');
const data = {
    name : 'Prajanya shrestha',
    username : 'prasea7',
    email : 'prajanya.stha7@gmail.com'
}


// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(user => {
//     output.innerHTML = `
//         <li>${user.name}</li>
//         <li>${user.username}</li>
//         <li>${user.email}</li>
//     `;
// })
// .catch(err => console.log(err));

// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then( user => console.log(user));

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then( user => output.textContent = user);