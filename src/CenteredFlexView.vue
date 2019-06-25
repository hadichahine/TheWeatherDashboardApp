<template>
	<div class='flex-view' :style='flexDirectionStyle'>
		<slot>
		</slot>
	</div>
</template>
<script>
export default {
	props: ['direction'],
	name: 'centered-flex-view',
	computed: {
		flexDirectionStyle(){
			if(this.direction === 'horizontal')
				return 'flex-direction: row'
			else return 'flex-direction: column'
		}
	}
}
</script>
<style scoped>
.flex-view{	
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	width:100%;
}
</style>
