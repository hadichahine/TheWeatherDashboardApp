import createObservable from './Observable.js'

function retrieveDayNameByDate(date){
	return Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
}

function tabulateHourlyWeatherRecordsIntoDailyForecastMatrix(hourlyRecords){
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

import DailyForecast from '../DailyForecast.js'

export default {
	__proto__: createObservable(),
	forecastsForEachComingDay: [],
	updateDailyWeatherForecast(dailyWeatherForecastArray){
		this.forecastsForEachComingDay = 
		dailyWeatherForecastArray
		.map((hourlyForecastForOneDay) => {
			return new DailyForecast(hourlyForecastForOneDay)
		}).map((dailyForecast) => {
			return {
				day: retrieveDayNameByDate(dailyForecast.date()),
				highTemperature: dailyForecast.highTemperature(),
				lowTemperature: dailyForecast.lowTemperature(),
				condition: dailyForecast.condition()
		    }
		})
		this.inform();
	},
	getDailyForecaseForFirstN(count){
		return this.forecastsForEachComingDay.slice(0, count);
	},
	getDailyForecast(){
		return this.forecastsForEachComingDay;
	}
}
