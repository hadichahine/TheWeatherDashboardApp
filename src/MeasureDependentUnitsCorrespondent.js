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
	retrieveUnitFamilyDependentMeasureUnit(unitFamily,measure){
		return unitFamiliesToMeasureUnitsMap[unitFamily][measure];
	}
}
