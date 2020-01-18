let apiKey = '0ca9d040ff56e1b286a929f6c5dd3f19';
import WeatherInfoEnum from './WeatherInfoEnum.js'

function convertWeatherInfoToCondition(openWeatherMapWeatherCondition){
	if(WeatherInfoEnum.hasOwnProperty(openWeatherMapWeatherCondition.toUpperCase()))
		return WeatherInfoEnum[openWeatherMapWeatherCondition.toUpperCase()]
	else return WeatherInfoEnum.UNKNOWN
}

export default {
	retrieveCurrentWeatherInfo(cityName,unit){
		return axios.get('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apiKey+'&units='+unit,{crossDomain:true})
		       .then((response) => {
				return {
					temperature: response.data.main.temp,
					minTemperature: response.data.main.temp_min,
					maxTemperature: response.data.main.temp_max,
					condition: convertWeatherInfoToCondition(response.data.weather[0].main),
					humidity: response.data.main.humidity,
					wind_speed: response.data.wind.speed
				}
			})
	},
	retrieveWeatherTemperatureAndConditionForNextHours(cityName,unit,recordCount){
		return axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid='+apiKey+'&units='+unit,{crossDomain:true})
		       .then((response) => {
				let records = [];
				for(let i = 0; i < recordCount;i++)
					records.push({
						date: new Date(response.data.list[i].dt*1000),
						temperature: response.data.list[i].main.temp,
						condition: convertWeatherInfoToCondition(response.data.list[i].weather[0].main),
					});
				return records;
			})
	}
}
