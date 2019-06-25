import createObservable from './Observable.js'
import MeasureIndependentUnitsCorrespondent from './MeasureIndependentUnitsCorrespondent.js'
import MeasureDependentUnitsCorrespondent from './MeasureDependentUnitsCorrespondent.js'

let unitFamiliesToMeasureUnitsMap = {
	imperial: {
		temperature: '°F',
		speed: 'mph'
	},
	metric: {
		temperature: '°C',
		speed: 'm/s'
	}
}

export default {
	__proto__: createObservable(),
	city: 'N/A',
	unitFamily: 'N/A',
	units: {
		temperature: 'N/A',
		speed: 'N/A',
		timeFormat: '24-hour',
		precipitation: 'mm',
		humidity: '%'
	},
	updateCity(city){
		this.city = city;
		this.inform();
	},
	updateUnitFamily(unitFamily){
		this.unitFamily = unitFamily;
		this.inform();
	},
	retrieveUnitForMeasure(measure){
		if(MeasureIndependentUnitsCorrespondent.isUnitSystemIndependentMeasure(measure))
			return MeasureIndependentUnitsCorrespondent.retrieveUnitFamilyIndependentMeasureUnit(measure);
		else return MeasureDependentUnitsCorrespondent.retrieveUnitFamilyDependentMeasureUnit(this.unitFamily,measure);
	}
}
