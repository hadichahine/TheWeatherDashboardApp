<template>
	<card-view>
		<centered-flex class='another-day-weather-card'>
			<span class='card-title' >{{ cardTitle }}</span>
			<weather-condition-art preset='large' :condition='weatherCondition'/>
			<div class='basic-weather-info'>
				<span class='current-temp-high-low' >{{ tempHigh }}°/{{ tempLow }}°</span>
				<div class='extra-details'>
					<span>Precipitation: 0%</span>
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
	name: 'day-weather-forecast',
	props: ['card-title','temp-low','temp-high','weather-condition'],
	components: {
		'card-view': Card,
		'centered-flex': CenteredFlexView,
		'weather-condition-art': WeatherConditionArt
	}
}
</script>
<style scoped>
* {
	box-sizing: border-box;
}

.another-day-weather-card {
	padding: 14.1% 19.8% 14.1% 18.9%;
	text-align: center;
}

.another-day-weather-card .card-title{
	line-height: 100%;
}

.another-day-weather-card .basic-weather-info .extra-details {
	font-size: 60%;
}

.another-day-weather-card .basic-weather-info .current-temp-high-low {
	font-size: 110%;
}

.another-day-weather-card .basic-weather-info .extra-details {
	font-size: 60%;
}
</style>
