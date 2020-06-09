class Weather{
    constructor(city){
        this.apiKey = '5adb069f4176e4f1851f5cc21c2c1c40';
        this.city = city;
    }
// Fetch Weather from API
    async getWeather(){
        const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const reponseData = await reponse.json();

        // console.log(reponseData);
        return reponseData;
    }
// Change Weather Location
    changeLocation(city){
        this.city = city;
    }
}