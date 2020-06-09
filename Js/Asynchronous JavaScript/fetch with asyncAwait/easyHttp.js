class easyHttp {
    async get(url){
        const response = await fetch(url);
        const user = await response.json();
        return user;
    }
    async post(url,data){
        const response = await fetch(url,{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const user = await response.json();
        return user;
    }
    async put(url,data){
        const response = await fetch(url,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        });
        const user = await response.json();
        return user;
    }
    async delete(url){
        const response = await fetch(url);
        let id = response.url.charAt(response.url.length - 1);
        const resData = await `Deleted userid ${id}`;
        return resData;
        
        // return data;
    }
}