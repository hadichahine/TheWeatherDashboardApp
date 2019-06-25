import createObservable from './Observable.js'

export default {
	__proto__: createObservable(),
	basicInfo: {
			temperature: "N/A",
			minTemperature: "N/A",
			maxTemperature: "N/A",
			condition: "N/A",
			humidity: "N/A",
			wind_speed: "N/A"
	           },
	updateBasicWeatherInfo(updatedWeather){
		this.basicInfo = updatedWeather;
		this.inform();
	},
	basicWeatherInfo(){
		return this.basicInfo;
	}
}
