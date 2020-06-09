const posts = [
    {title : 'Post 1', body : 'This is post one'},
    {title : 'Post 2', body : 'This is post two'}
]

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 2000);
}

// USING CALLBACK
// function createPosts(post, callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }, 1000)
// }

// createPosts({title: 'Post 3', body : 'This is post three'}, getPosts);

// USING PROMISE without Error
// function createPosts(post){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             posts.push(post);
//             resolve();
//         },2000);
//     })
// }

// Using PROMISE with Error
function createPosts(post){
    let promise =  new Promise(function(resolve, reject){
        const error = false;
        if(!error){
            resolve(); //resolve(); === getPosts();
        } else{
            reject('Something Went Wrong');
        }
        setTimeout(function(){
            posts.push(post);
        },2000)
    });
    return promise;
}

// createPosts({title: 'Post 3', body : 'This is post three'}).then(getPosts,alert);
createPosts({title: 'Post 3', body : 'This is post three'})
    .then(getPosts)
    .catch(alert); //alert is function
