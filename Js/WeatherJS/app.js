// Weather() Object takes 'City' 
const weather = new Weather('damak');
const ui = new UI();

// If WE want to change location,WE can call changeLocation()
// weather.changeLocation('delhi')

// WE want this Script to be excecuted under DOMContentLoaded
// weather.getWeather() //getWeather() is an async function, So return Promise.
//     .then(results => console.log(results))
//     .catch(err => console.log(err));


document.addEventListener('DOMContentLoaded', getWeather);

// function getWeather(){
//     weather.getWeather() //getWeather() is an async function, So return Promise.
//         .then(results => 
//             console.log(results) //Instead of Console.log() WE want to Call method inside UI Class called paint(), that will paint the DOM/Screen/UI
//             )
//         .catch(err => console.log(err));
// }

//Change Location Event Using Bootstrap 'modal' Dialog Box. Dynamically Changing the Location
document.getElementById('w-change-btn').addEventListener('click', (e) =>{
            const city = document.getElementById('city').value;
            
            weather.changeLocation(city);  
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

