<template>
	<card>
		<centered-flex class='time-scale-weather' direction='horizontal'>
			<centered-flex class='time-weather-record' v-for="timedWeather in timedWeatherCollection" :key='timedWeather.time'>
				<span>{{ timedWeather.time }}</span>
				<weather-condition-art preset='small' :condition='timedWeather.weatherCondition' />
				<span>{{ timedWeather.temperature }}°</span>
			</centered-flex>
		</centered-flex>
	</card>
</template>
<script>

import CenteredFlexView from './CenteredFlexView.vue'
import WeatherConditionArt from './WeatherConditionArt.vue'
import Card from './Card.vue'

export default {
	name: 'time-scale-weather-condition',
	props: ['timed-weather-collection'],
	components: {
		'centered-flex': CenteredFlexView,
		'card': Card,
		'weather-condition-art': WeatherConditionArt
	}
}
</script>
<style scoped>
* {
	box-sizing: border-box;
}

.time-scale-weather {
	font-weight: 500;
	padding: 3.61%;
}

.time-scale-weather span {	
	font-size: 150%;
	line-height: 100%;
}

.time-scale-weather .time-weather-record {
	width: 14.75%;
}

.time-scale-weather .weather-art-img{
	width: 100%;
	filter: drop-shadow(-4px 4px 0 #003c87);
}
</style>
