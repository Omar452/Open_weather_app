export default class Ui{
    updateUi(data){
        let weatherDiv = document.querySelector('#weather');
        let html = `
            <div>
                <p>${data.name}, ${data.sys.country}</p>
                <p>${data.weather[0].description}</p>
                <p>${Math.round(data.main.temp)} °C</p>
                <p>"Feels like": ${Math.round(data.main.feels_like)}</p>
                <p>Humidity: ${data.main.humidity} %</p>
                <p>Min temperature: ${Math.round(data.main.temp_min)} °C</p>
                <p>Max temperature: ${Math.round(data.main.temp_max)} °C</p>
                <p>Wind: ${Math.round(data.wind.speed * 2,369)} mph</p>
                <p>Rain volume for last hour: ${data.rain ? data.rain['1h'] : 0} mm</p>
            </div>
        `;

        weatherDiv.innerHTML = html;
    }
}