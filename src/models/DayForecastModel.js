import createObservable from './Observable.js'

function retrieveDayNameByDate(date){
	return Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
}

export default {
	__proto__: createObservable(),
	forecastsForEachComingDay: [],
	updateDailyWeatherForecast(dailyWeatherForecastArray){
		this.forecastsForEachComingDay = dailyWeatherForecastArray.map((dailyForecast) => {
			return {
				day: retrieveDayNameByDate(dailyForecast.date()),
				highTemperature: dailyForecast.highTemperature(),
				lowTemperature: dailyForecast.lowTemperature(),
				condition: dailyForecast.condition()
		        }
		})
		this.inform();
	},
	getDailyForecast(){
		return this.forecastsForEachComingDay;
	}
}
