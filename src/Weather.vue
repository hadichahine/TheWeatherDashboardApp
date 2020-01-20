<template>
	<div class='dashboard-variables dashboard-main text-color-main'>
		<div class='top-bar-grid-cell'>
			<div class='branding'>
				<div class='emblem-image-wrapper'>
					<img style='height:100%;filter: drop-shadow(-3px 3px 0 #003c87);' src='./assets/icons/logo.png' />
				</div
				><div class='brand-name-wrapper'>
					<span>The</span>
					<span>Weather</span>
					<span>Dashboard</span>
				</div>
			</div>
		</div>
		<div class='top-bar-grid-cell'>
			<button class='change-location-button'>Change Settings</button>
		</div>
		<div class='top-bar-grid-cell'>
			<button class='refresh-button' @click='refreshAllWeatherStats'>
				<div class='image-wrapper'>
					<img style='width:100%;' src='./assets/icons/art_refresh.png' />
				</div>			
			</button>
		</div>
		<div class='dashboard-content'>
			<div class='dashboard-content-grid'>
				<weather-condition-card
					style='grid-column-start: 1;grid-column-end: 3;grid-row-start: 1;grid-row-end: 3;'
					header-text='Feels like'					
					:current-temperature='Math.round(currentWeatherModel.basicWeatherInfo().temperature)' 
					:temp-high='Math.round(currentWeatherModel.basicWeatherInfo().maxTemperature)'
					:temp-low='Math.round(currentWeatherModel.basicWeatherInfo().minTemperature)' 
					:weather-condition='currentWeatherModel.basicWeatherInfo().condition'
					:humidity='Math.round(currentWeatherModel.basicWeatherInfo().humidity)+"%"'
					:wind-speed="Math.round(currentWeatherModel.basicWeatherInfo().wind_speed) + 'm/s'"
				/>
				<day-weather-forecast v-for='one in dayForecastModel.getDailyForecaseForFirstN(4)'
					:card-title='one.day'
					:weather-condition='one.condition'
					:temp-high='Math.round(one.highTemperature)'
					:temp-low='Math.round(one.lowTemperature)'
				/>
				<time-scale-weather-condition 
					style='grid-column-start: 3;grid-column-end: 6'
					:timed-weather-collection="hourlyWeatherForecast"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import AppModel from './AppModel.js'

import CurrentWeatherConditionCard from './CurrentWeatherConditionCard.vue'
import CenteredFlexView from './CenteredFlexView.vue'
import DayWeatherForecast from './DayWeatherForecast.vue'
import TimeScaleWeatherConditionView from './TimeScaleWeatherConditionView.vue'

import CurrentWeatherModel from 'AppModels/CurrentWeatherModel.js'
import HourForecastModel from 'AppModels/HourForecastModel.js'
import DayForecastModel from 'AppModels/DayForecastModel.js'

export default {
	name: 'weather-view',
	components: {
		'weather-condition-card': CurrentWeatherConditionCard,
		'day-weather-forecast': DayWeatherForecast,
		'centered-flex': CenteredFlexView,
		'time-scale-weather-condition': TimeScaleWeatherConditionView
	},
	data(){
		return {
			currentWeatherModel: CurrentWeatherModel,
			hourForecastModel: HourForecastModel,
			dayForecastModel: DayForecastModel
		}
	},
	computed: {
		hourlyWeatherForecast(){
			return this.hourForecastModel.getHourlyForecast()
			       .map((oneHourlyRecord) => {
					return {
						time: this.presentTimeInXXColon00Format(oneHourlyRecord.date.getHours()),
						weatherCondition: oneHourlyRecord.condition,
						temperature: Math.round(oneHourlyRecord.temperature)
					}
			})
		}
	},
	methods: {
		presentTimeInXXColon00Format(hours){
			if(hours < 10)
				return "0" + hours+ ":00";
			else return hours + ":00";
		},
		refreshAllWeatherStats(){
			AppModel.refresh()
		}
	}
}
</script>

<style>
.dashboard-variables {	
	--text-large-temperature-double-x: 13px;	
	--text-large-temperature-double-y: -13px;
	--weather-condition-image-double-x: 6px;
	--weather-condition-image-double-y: -6px;
	--weather-foreground-color: #8bc5ff;
	--weather-double-color: #003c87;
	--weather-background-color: #101f3e;
	--dashboard-content-width: 876px;
	--dashboard-content-height: 363px;	
	--dashboard-content-gap-value: 41px;
	--dashboard-padding-top: 30px;
	--dashboard-top-height: 40px;
	--dashboard-font-size-relative-to-rem: 	83%;
	--dashboard-top-buttons-border-radius: 7px;
	--dashboard-change-settings-button-width: 116px;
	--dashboard-refresh-button-width: 29px;
	--dashboard-top-buttons-height: 27px;
	--card-stroke-width: 2.6px;
}

.dashboard-main {
	display:grid;
	box-sizing: border-box;	
	padding: var(--dashboard-padding-top) 0 0 0;
	grid-template-columns: 1fr var(--dashboard-content-width) 1fr;	
	grid-template-rows: var(--dashboard-top-height) 1fr;
	grid-column-gap: var(--dashboard-content-gap-value);
	font-size: var(--dashboard-font-size-relative-to-rem);
	flex-direction: column;
	justify-content: space-between;
}

.dashboard-main .top-bar-grid-cell {
	position: relative;
}

.dashboard-main .top-bar-grid-cell button{
	height: var(--dashboard-top-buttons-height);	
	display:inline-block;
	background-color: transparent;	
	outline: none;
	border: var(--card-stroke-width) solid var(--weather-foreground-color);
	border-radius: var(--dashboard-top-buttons-border-radius);
}

.dashboard-main .branding {
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
}

.dashboard-main .branding .emblem-image-wrapper {
	flex: auto;
	display: flex;
	justify-content: flex-end;
	margin-right: 10px;
}

.dashboard-main .branding .emblem-image-wrapper img {
	display: block;
	text-align: right;
}

.dashboard-main .branding .brand-name-wrapper span {
	display: block;
	font-weight: bold;
	font-size: 100%;
	line-height: 100%;
}

.dashboard-main .change-location-button {
	width: var(--dashboard-change-settings-button-width);
	position: absolute;
	top: 50%;
	right: 0;	
 	transform: translate(0, -50%);
	font-size: 92%;
}

.dashboard-main .refresh-button {
	width: var(--dashboard-refresh-button-width);
	position: absolute;
	top: 50%;
	left: 0;
 	transform: translate(0, -50%);
	padding: 4px 4px 4px 5.5px;
}

.dashboard-main .refresh-button .image-wrapper img {
	filter: drop-shadow(-3px 3px 0 #003c87);
}

.dashboard-main .dashboard-content {
	display:flex;
	align-items: center;
	grid-column-start:2;
	grid-column-end:3;
}

.dashboard-main .dashboard-content .dashboard-content-grid {
	display: grid;
	height: var(--dashboard-content-height);
	width: 100%;
	grid-template-columns: repeat(6,1fr);
	grid-template-rows: repeat(2,1fr);
	grid-gap: var(--dashboard-content-gap-value);
}
</style>
