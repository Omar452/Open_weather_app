export default class Weather{
    constructor(apiKey){
        this.apiKey = apiKey;
    }

    async getWeather(city){
        try{
            let request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
            let response = await request.json();
            return response;
        }
        catch(error){
            return error;
        }
        
    }
}