const http = new easyHTTP();
// http.get('https://jsonplaceholder.typicode.com/posts/1',
//         function(err,posts){
//             if(err){
//                 console.log(err);
//             } else{
//                 console.log(posts);
//             }
//         });

// const data = {
//     title : 'Custom Post',
//     body : 'This is a custom post'
// }
// const data = {
//     "title" : "Custom Post",
//     "body" : "This is a custom post"
// }


// http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, posts){
//     if(error){
//         console.log(error);
//     } else{
//         console.log(posts);
//     }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/12', data, function(error, posts){
//     if(error){
//         console.log(error);
//     } else{
//         console.log(posts);
//     }
// });


http.delete('https://jsonplaceholder.typicode.com/posts/1', 
			function(response){
				console.log(response)
			});