const storage = new Storage(); 
// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Now weatherLocation Object has "city : 'value' ".So instead of Hard-Coding Location in Weather() Object, let's Pass the location in LS.
// const weather = new Weather('damak');
const weather = new Weather(weatherLocation.city); //Even if Nothing in LS, it should Use 'Damak'. So Now if WE change this.defaultCity in storage.js, it reflects in our UI.

// Now When WE actually Change the Location From Bootstrap modal, that needs to Persist to LS instead of just Updating the UI. To do that, Go Under  Where WE Dynamically Changed the Location
const ui = new UI();



document.addEventListener('DOMContentLoaded', getWeather);



//Change Location Event Using Bootstrap 'modal' Dialog Box. 
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
            const city = document.getElementById('city').value;
    
            // Dynamically Changing the Location   
            weather.changeLocation(city);  

            // Set location in LS
            storage.setLocationData(city);
    
            //Get & display/Paint the weather
            getWeather();
            
            //Close modal Using jQuery
            $('#locModal').modal('hide');
        });


function getWeather(){
    weather.getWeather() //getWeather() is an async function, So return Promise.
        .then(results => {
            // console.log(results.main.temp - 273.15);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

