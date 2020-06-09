const posts = [
    {title : 'Post 1', body : 'This is post one'},
    {title : 'Post 2', body : 'This is post two'}
]

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
            console.log(output); //Final Version of iteration <li>Post 1</li><li>Post 2</li><li>Post 3</li>
        });
        document.body.innerHTML = output; //As <li> is Block level. So each <li> pushed to new line.♥
    }, 2000)
}

function createPosts(post, callback){
    setTimeout( () => {
        posts.push(post);
        callback();
    }, 2000)
}

createPosts({title : 'Post 3', body : 'This is post three'}, getPosts);

