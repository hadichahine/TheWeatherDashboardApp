import createObservable from './Observable.js'
import DailyForecast from 'Entities/DailyForecastEntity.js'

function retrieveDayNameByDate(date){
	return Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
}

export default {
	__proto__: createObservable(),
	hourWeatherPerDayForecastMatrix: [],
	updateDailyWeatherForecast(hourWeatherPerDayForecastMatrix){
		this.hourWeatherPerDayForecastMatrix = hourWeatherPerDayForecastMatrix;
		this.inform();
	},
	getDailyForecaseForFirstN(count){
		return this.hourWeatherPerDayForecastMatrix
				   .map((hourlyForecastForOneDay) => {
						let dailyForecast = new DailyForecast(hourlyForecastForOneDay)
						return {
							day: retrieveDayNameByDate(dailyForecast.date()),
							highTemperature: dailyForecast.highTemperature(),
							lowTemperature: dailyForecast.lowTemperature(),
							condition: dailyForecast.condition()
		    			}
					}).slice(0, count);
	},
	getDailyForecast(){
		return this.forecastsForEachComingDay;
	}
}
