export default class Ui{
    updateUi(data){
        let weatherDiv = document.querySelector('#weather');
        let html = `
            <div>
                <p>${data.name}, ${data.sys.country}</p>
                <p>${data.weather.description}</p>
                <p>${data.main.temp} °C</p>
                <p>"Feels like": ${data.main.feels_like}</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Min temperature: ${data.main.temp_min} °C</p>
                <p>Max temperature: ${data.main.temp_max} °C</p>
                <p>Wind: ${data.wind.speed} mph</p>
                <p>Precipitations last hour: </p>
            </div>
        `;

        weatherDiv.innerHTML = html;
    }
}