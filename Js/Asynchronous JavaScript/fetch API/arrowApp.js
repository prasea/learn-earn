document.getElementById('button1').addEventListener('click', loadText);
const output = document.getElementById('output');

function loadText(){
    fetch('test.txt')
        .then( res => res.text())
        .then( value => output.innerHTML = `<h3>${value}</h3>`)
        .catch( err => output.innerHTML = `<h3>${err}</h3>`);
}

document.getElementById('button2').addEventListener('click', loadJson);

function loadJson(){
    fetch('posts.json')
        .then( res => res.json())
        .then( posts => {
            let op = '';
            posts.forEach(function(post){
                op += `<li>${post.title}</li>`;
            });
            output.innerHTML = op;
        })
        .catch( err => console.log(err));

}

document.getElementById('button3').addEventListener('click', loadExternal);

function loadExternal(){
    fetch('https://api.github.com/users')
        .then( res => res.json())
        .then( users => {
            let op = '';
            users.forEach( user => op += `<li>${user.login}</li>`);
            output.innerHTML = op;
        })
        .catch( err => console.log(err));
}