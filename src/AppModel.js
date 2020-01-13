import WeatherConfiguration from './WeatherConfiguration.js'

import CurrentWeatherModel from 'AppModels/CurrentWeatherModel.js'
import DayForecastModel from 'AppModels/DayForecastModel.js'
import HourForecastModel from 'AppModels/HourForecastModel.js'

import WeatherApi from './OpenWeatherApiAdapter.js'

function tabulateHourWeatherIntoDayHourMatrix(hourlyRecords){
	let currentIndex = -1
	let currentDay
	let array = []
	hourlyRecords
	.forEach((hourlyRecord) => {
		if(hourlyRecord.date.getDate() !== currentDay) {
			currentDay = hourlyRecord.date.getDate()
			currentIndex++
			array[currentIndex] = []
		}
		array[currentIndex].push(hourlyRecord)
	})
	return array
}

export default {
	assignCityAndUnitFamily(city,unitFamily){
		WeatherConfiguration.updateCity(city);
		WeatherConfiguration.updateUnitFamily(unitFamily);
		this.refresh();
	},
	refresh(){
		WeatherApi.retrieveCurrentWeatherInfo(WeatherConfiguration.city,WeatherConfiguration.unitFamily)
		.then((result) => {
			CurrentWeatherModel.updateBasicWeatherInfo(result)
		})
		WeatherApi.retrieveWeatherTemperatureAndConditionForNextHours(WeatherConfiguration.city,WeatherConfiguration.unitFamily,5)
		.then((result) => {
			HourForecastModel.updateHourlyForecast(result)
		})
		WeatherApi.retrieveWeatherTemperatureAndConditionForNextHours(WeatherConfiguration.city,WeatherConfiguration.unitFamily,30)
		.then((result) => {
			DayForecastModel.updateDailyWeatherForecast(
				tabulateHourWeatherIntoDayHourMatrix(result)
			)
		})
	}
}
