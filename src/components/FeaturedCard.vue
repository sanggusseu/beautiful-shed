<template>
	<div class="col-sm-12 col-md-4 col-lg-3">
		<div class="card h-100">
			<div class="card-header">
				<span class="badge text-bg-secondary">{{ type }}</span>
			</div>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{{ title }}</h5>
				<p class="card-text flex-grow-1">
					{{ text }}
				</p>
				<a :href="url" target="_blank" class="btn btn-primary mt-auto"
					>방문하기</a
				>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	type: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped></style>
