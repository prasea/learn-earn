// class easyHttp{
//     get(url, callback){
//         fetch(url)
//             .then(function(res){
//                 return res.json();
//             })
//             .then(callback)
//             .catch(function(err){
//                 console.log(err);
//             })
//     }
// }

class easyHttp{
    get(url){
        return new Promise(function(resolve, reject){
            fetch(url)
            .then( res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }) 
    }

    post(url,data){
        return new Promise(function(resolve,reject){
            fetch(url,{
                method : 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then( res => res.json())
            .then( user => resolve(user))
            .catch(err => reject(err))
        });
    }

 	put(url, data){
		return new Promise( (resolve, reject) =>{
			fetch(url,{
				method : 'PUT',
				headers : {
					'Content-type' : 'application/json'
				}, 
				body : JSON.stringify(data)
			})
			.then( res => res.json() ) 
			.then( data => resolve(data))
			.catch( err => reject(err))
		});
    }
    delete(url){
        return new Promise( (resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then( () => {
                let id = url.charAt(url.length - 1);
                resolve(`User with userId ${id} deleted`);
            })
        });
    }
}