import createObservable from './Observable.js'

export default {
	__proto__: createObservable(),
	hourlyForecast: [],
	units: {
		temperature: 'celcius',
		timeFormat: '24-hour'
	},
	updateHourlyForecast(hourlyWeatherForecast){
		this.hourlyForecast = hourlyWeatherForecast;
		this.inform();
	},
	getHourlyForecast(){
		return this.hourlyForecast;
	}
}
