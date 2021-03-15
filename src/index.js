import './style.css';
import Weather from './Weather';

let apiKey = 'e1084e724cab6801907df8de79c5c223';

//elements from DOM
let form = document.querySelector('form');
let cityInput = document.querySelector('input');
let weatherDiv = document.querySelector('#weather');

// classes instances
let weather = new Weather(apiKey);

form.addEventListener('submit', function(e){
    e.preventDefault();
    let city = cityInput.value;
    weather.getWeather(city)
        .then( data => {
            console.log(data);
        })
})