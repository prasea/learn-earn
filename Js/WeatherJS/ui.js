class UI{
// Do You Like to insert everything from JavaScript? Or Do You Like to insert little pieces into Elements that are already defined in HTML? AS in this WeatherJS application. OR You Could Use Template Engine(Research)
    constructor(){
        this.location = document.getElementById('w-location');
        this.main = document.getElementById('w-main');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelslike');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        this.location.textContent = weather.name;
        this.main.textContent = `Main Weather : ${weather.weather[0].main}`;
        this.desc.textContent = `Description : ${weather.weather[0].description}`;
        const temp = (weather.main.temp - 273.15).toFixed(1);
        this.string.innerHTML = `${temp} &#8451;`
        // this.icon.setAttribute('src', 'URL not avl in our API');
        this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}`; 
        const feels = (weather.main.feels_like - 273.17).toFixed(1);
        this.feelsLike.innerHTML = `Feels Like : ${feels} &#8451;`; 
        this.wind.textContent = `Wind : ${weather.wind.speed}`; 

    }

}