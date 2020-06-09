document.getElementById('button1').addEventListener('click', loadText);
const output = document.getElementById('output');

function loadText(){
    fetch('test.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(value){
            output.innerHTML = `<h3>${value}</h3>`;
        })
        .catch(function(err){
            output.innerHTML = `<h3>${err}</h3>`;
        })
        
}

document.getElementById('button2').addEventListener('click', loadJson);

function loadJson(){
    fetch('posts.json')
        .then(function(res){
            return res.json();
        })
        .then(function(posts){
            // console.log(posts);
            let op = '';
            posts.forEach(function(post){
                op += `<li>${post.title}</li>`;
            });
            output.innerHTML = op;
            
        })

}

document.getElementById('button3').addEventListener('click', loadExternal);

function loadExternal(){
    fetch('https://api.github.com/users')
        .then(function(res){
            return res.json();
        })
        .then(function(users){
            let op = '';
            users.forEach(function(user){
                const img = document.createElement('img');
                img.setAttribute('src', user.avatar_url);
                output.appendChild(img);
                <br></br>
            });
        })
}