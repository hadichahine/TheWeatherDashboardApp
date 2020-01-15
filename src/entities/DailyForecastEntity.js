export default class {

	constructor(hourlyRecordsForOneDay){
		this.hourlyRecords = hourlyRecordsForOneDay
	}

	highTemperature(){
		return this.hourlyRecords
		.reduce((maximumAttainedTemperatureYet,hourlyRecord) => {
			if(hourlyRecord.temperature > maximumAttainedTemperatureYet.temperature)
				return hourlyRecord
			else return maximumAttainedTemperatureYet
		}).temperature
	}

	lowTemperature(){
		return this.hourlyRecords
		.reduce((maximumAttainedTemperatureYet,hourlyRecord) => {
			if(hourlyRecord.temperature < maximumAttainedTemperatureYet.temperature)
				return hourlyRecord
			else return maximumAttainedTemperatureYet
		}).temperature
	}

	date(){
		return this.hourlyRecords[0].date
	}

	condition(){
		return this.hourlyRecords[0].condition
	}

}
