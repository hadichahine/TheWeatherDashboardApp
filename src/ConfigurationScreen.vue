<template>
	<div class='config-screen'>
		<div class='branding'>
			<img src='./assets/icons/logo.png' />
			<div class='product-name'>
				<span>The<br>Weather<br>Dashboard</span>
			</div>
		</div>
		<div class='controls'>
			<div class='border-circled'>			
				<input class='city-input' v-model='city' placeholder='City (i.e. Beirut)'></input>
			</div>
			<toggle-view class='temperature-unit-selecter' @optionChanged='unitOptionChanged' first-option='°C' second-option='°F' />
		</div>
		<button class='base-button' @click='changeCityForCurrentWeatherModel()'>Take me there!</button>
	</div>
</template>

<script>
import AppModel from './AppModel.js';
import ToggleView from './ToggleView.vue';

let unitToFamilyMap = {
	'°C': 'metric',
	'°F': 'imperial'
}

export default {
  name: 'configuration-screen',
  components: {
	'toggle-view': ToggleView
  },
  data () {
    return {
     	city: '',
	unit: ''
    }
  },
  methods: {
	changeCityForCurrentWeatherModel(){
		AppModel.assignCityAndUnitFamily(this.city,unitToFamilyMap[this.unit]);
	},
	unitOptionChanged(newOption){
		this.unit = newOption;
	}
  },
  computed: {
	unitFamily(){
		return unitToFamilyMap[this.unit];
	}
  }
}
</script>

<style>
	.config-screen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
	}

	.config-screen .branding *{
		vertical-align: middle;
	}

	.config-screen .branding .product-name {		
		font-weight: bold;
		display: inline-block;
	}

	.config-screen .branding img {
		filter: drop-shadow(-6px 6px 0px #003c87);
	}

	.config-screen .branding .product-name span{
		display:block;
		margin-left: 30px;
		color: #8bc5ff;
		font-size:400%;
		text-shadow: -0.1em 0.1em 0px #003c87;
		line-height: 100%;
	}

	.config-screen .controls * {
		vertical-align: middle;
	}

	.config-screen .controls .border-circled {
		border-bottom: 2px solid #8bc5ff;
	}

	.config-screen .controls .city-input {
		box-sizing: content-box;
		width: 400px;
  		font-size: 133%;
		height: 30px;
 		padding-left: 6px;
    		padding-top: 3px;
		border: none;
		outline: none;
		background-color: transparent;
		color: #8bc5ff;
		text-align: center;		
		text-shadow: -0.1em 0.1em 0px #003c87;
	}

	.config-screen .controls .city-input::placeholder {
		color: #8bc5ff;
		opacity: 0.5;
	}

	.config-screen .controls .temperature-unit-selecter {
		display: block;
		text-align: center;
		margin-top: 30px;
	}

	.config-screen .base-button {
		display: block;
		font-weight: bold;
		border-radius: 10px;
		border: 2.6px solid #8bc5ff;
		font-size: 115%;
		padding: 8px;
		background-color: transparent;
		outline: none;
		opacity: 0.5;
		color: #8bc5ff;
		transition: opacity 0.3s;
		text-shadow: -3px 3px 0 #003c87;
	}
	
	.config-screen .base-button:hover {
		opacity: 1;
	}
</style>
