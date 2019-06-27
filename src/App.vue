<template>
	<keep-alive>
		<component id='app' v-bind:is="currentComponent"></component>
	</keep-alive>
</template>

<script>
	import ConfigurationScreen from './ConfigurationScreen.vue'
	import Weather from './Weather.vue'
	import CompositeDashboardModel from 'AppModels/CompositeDashboardModel.js'

	export default {
		name: 'App',
		components: {
			'configuration-screen': ConfigurationScreen,
			'weather': Weather
		},
		data() {
			return {
				currentComponent: 'configuration-screen'
			};
		},
		mounted(){
			CompositeDashboardModel.onchange(() => { this.currentComponent = 'weather'});
		}
	};
</script>

<style>
	@font-face {
		font-family: avenir;
		font-weight: bold;
		src: url('/fonts/AvenirNext-DemiBold.ttf');
	}

	@font-face {
		font-family: avenir;
		font-weight: normal;
		src: url('/fonts/AvenirNext-Regular.ttf');
	}

	@font-face {
		font-family: avenir;
		font-weight: 500;
		src: url('/fonts/AvenirNext-Medium.ttf');
	}

	html {
		background-color: #101f3e;
		font-family: avenir;
	}

	button {
		font-family: inherit;
		color: inherit;
	}

	input {
		font-family: inherit;
		font-weight: 500;
	}

	body {
		margin: 0;
	}

	.text-color-main {
		color: #8bc5ff;
	}

	#app {
		width: 100%;
		height: 100%;
	}
</style>
