<template>
	<div>
		<div class='toggle-container'>
			<button 
				@click='changeCurrentChosenOptionTo(firstOption)'
				:disabled='isChosenOption(firstOption)'
				:class="{ 'chosen-option': isChosenOption(firstOption),
					  'not-chosen-option': !isChosenOption(firstOption) }">
				{{ firstOption }}
			</button
			><button
				@click='changeCurrentChosenOptionTo(secondOption)'
				:disabled='isChosenOption(secondOption)'
				:class="{ 'chosen-option': isChosenOption(secondOption),
					  'not-chosen-option': !isChosenOption(secondOption) }">
				{{ secondOption }}
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'toogle-view',
		props: ['firstOption','secondOption'],
		data(){
			return {
				currentChosenOption: this.firstOption,
			}
		},
		methods: {
			changeCurrentChosenOptionTo(newOption){
				this.currentChosenOption = newOption
				this.$emit('optionChanged',this.currentChosenOption);
			},
			isChosenOption(option){
				return option === this.currentChosenOption;
			}
		},
		mounted(){
			this.$emit('optionChanged',this.currentChosenOption);
		}
	}
</script>

<style>
	.toggle-container {
		display: inline-block;
		border: 2.6px solid #8bc5ff;
		border-radius: 10px;
	}

	.toggle-container button {
		padding: 7px 9px 7px 9px;
		background-color: transparent;
		font-size: 120%;
		outline: none;
		color: #8bc5ff;
		transition: opacity 0.3s;
		font-weight: bold;
		border: none;		
		text-shadow: -3px 3px 0 #003c87;
	}

	.not-chosen-option {
		opacity: 0.5;
	}
</style>
