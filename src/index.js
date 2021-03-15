import './style.css';
import Weather from './Weather';
import Ui from './Ui';

let apiKey = 'e1084e724cab6801907df8de79c5c223';

//elements from DOM
let form = document.querySelector('form');
let cityInput = document.querySelector('input');
let weatherDiv = document.querySelector('#weather');

// classes instances
let weather = new Weather(apiKey);
let ui = new Ui();

//add event listener on form submit
form.addEventListener('submit', function(e){
    e.preventDefault();
    let city = cityInput.value;
    weather.getWeather(city)
        .then( data => {
            if(data.sys.country !== "GB"){
                weatherDiv.innerHTML = `<p style="color:red">"${city}" is not in the UK, please enter a valid UK city name!</p>`
            }else{
                ui.updateUi(data);
            }
            console.log(data);
            form.reset();
        })
        .catch(error => {
            if(error.message === "Cannot read property 'country' of undefined"){
                weatherDiv.innerHTML = `<p style="color:red">I don't know this city, please enter a valid UK city name!</p>`
            }
            console.log(error.message);
            form.reset();
        });
});