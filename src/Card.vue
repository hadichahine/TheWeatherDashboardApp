<template>
	<div class='card'>
		<slot>
		</slot>
	</div>
</template>
<script>
export default {
	name: 'card-view'
}
</script>
<style>
.card {
	box-sizing: border-box;
	height: 100%;
	width: 100%;	
	border-radius: 20px;
	border: 2.6px solid #8bc5ff;
}
</style>
