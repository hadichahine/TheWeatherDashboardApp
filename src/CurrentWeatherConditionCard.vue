<template>
	<card-view class='current-weather-card'>
		<centered-flex>
			<span class='card-title' >{{ headerText }}</span>
			<span class='current-weather'>{{ currentTemperature }}°</span>
			<div class='current-weather-details'>
				<weather-condition-art preset='medium' :condition='weatherCondition' class='current-weather-condition-image'
				/><div class='current-weather-extras'>
					<span class='current-temp-high-low' >{{ tempHigh }}°/{{ tempLow }}°</span>
					<span>Precipitation: 100%</span>
					<span>Humidity: {{ humidity }}</span>
					<span>Wind: {{ windSpeed }}</span>
				</div>
			</div>
		</centered-flex>
	</card-view>
</template>
<script>

import Card from './Card.vue'
import CenteredFlexView from './CenteredFlexView.vue'
import WeatherConditionArt from './WeatherConditionArt.vue'

export default {
	name: 'weather-condition-card',
	props: ['header-text',
		'current-temperature',
		'temp-high',
		'temp-low',
		'weather-condition',
		'humidity',
		'wind-speed'],
	components: {
		'card-view': Card,
		'weather-condition-art': WeatherConditionArt,
		'centered-flex': CenteredFlexView
	}
}	
</script>
<style scoped>
* {
	box-sizing: border-box;
}

.current-weather-card{
	box-sizing: border-box;
	display:inline-block;
	padding: 18.01% 11.4% 18.01% 13.2%;
}

.current-weather-card .card-title {
	display: block;
	font-size: 170%;
	text-align: center;
	line-height:100%;
	font-weight: 500;
}

.current-weather-card .current-weather {
	line-height:1;
	display: block;
	font-size:900%;
	font-weight: bold;
	text-shadow: var(--text-large-temperature-double-y) var(--text-large-temperature-double-x) 0 var(--weather-double-color);
}

.current-weather-card .current-weather-details {
	text-align: center;
}

.current-weather-card .current-weather-details > * {
	display:inline-block;
	vertical-align: middle;
}

.current-weather-card .current-weather-details .current-weather-condition-image {
	max-width: 34%;
}

.current-weather-card .current-weather-details .current-weather-condition-image img{
	width:100%;
	filter: drop-shadow(var(--weather-condition-image-double-y) var(--weather-condition-image-double-x) 0 var(--weather-double-color));
}

.current-weather-card .current-weather-details .current-weather-extras{
	margin-left: 4%;
}

.current-weather-card .current-weather-details .current-weather-extras span{
	display:block;
	line-height:120%;
	text-align:initial;
}

.current-weather-card .current-weather-details .current-weather-extras .current-temp-high-low{
	font-size:200%;
}
</style>
