<template>
<div :class='chosenStylingPreset'>
	<img :src='appropriateConditionArt' />
</div>
</template>
<script>

let weatherConditionToConditionArtMap = {
	'clear': require('WeatherConditionArt/art_clear.png'),
	'clear_night': require('WeatherConditionArt/art_clear_night.png'),
	'clouds': require('WeatherConditionArt/art_clouds.png'),
	'few_clouds': require('WeatherConditionArt/art_few_clouds.png'),
	'few_clouds_night': require('WeatherConditionArt/art_few_clouds_night.png'),
	'rain': require('WeatherConditionArt/art_rain.png')
}

export default {
	name:'weather-condition-art',
	props: ['preset','condition'],
	computed: {
		chosenStylingPreset(){
			return { 'weather-condition-art-large': this.preset === 'large',
				 'weather-condition-art-medium': this.preset === 'medium',
				 'weather-condition-art-small': this.preset === 'small' }
		},
		appropriateConditionArt(){
			return weatherConditionToConditionArtMap[this.condition];
		}
	}
}
</script>
<style scoped>
img {
	width: 100%;
}

.weather-condition-art-large img{
	filter: drop-shadow(-4.5px 3.5px 0 var(--weather-double-color));
}

.weather-condition-art-medium img{
	filter: drop-shadow(-4.5px 3.5px 0 var(--weather-double-color));
}

.weather-condition-art-small img{
	filter: drop-shadow(-4.5px 3.5px 0 var(--weather-double-color));
}
</style>
