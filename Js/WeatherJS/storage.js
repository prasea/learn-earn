class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'Delhi';
    }
// Now WE're Saving 'city' as String.  So need for JSON.stringigy()/parse()/Turning Array into String
    getLocationData(){
    // Check if City in LS is Null. If Yes, Set them to Default City if Notm WE want to Use Whatever City in LS.
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else{
            this.city = localStorage.getItem('city');
        }
//Returning 'city' as Object.
        return {
            city : this.city
        }
    }

    setLocationData(city){
        localStorage.setItem('city', city)
    }

}