let unitSystemIndependentMeasuresToUnitsMap = {
	timeFormat: '24-hour',
	precipitation: 'mm',
	humidity: '%'
}

export default {
	isUnitSystemIndependentMeasure(measure){
		return Object.keys(unitSystemIndependentMeasuresToUnitsMap).includes(measure)
	},
	retrieveUnitFamilyIndependentMeasureUnit(measure){
		return unitSystemIndependentMeasuresToUnitsMap[measure]
	}
}
