<template>
	<header class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
		<div class="container-fluid">
			<h1 class="d-flex mb-0 fw-bold">
				<a class="navbar-brand" href="https://sanggusseu.github.io/bookmark/">
					멋진 헛간
				</a>
			</h1>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<button
							class="nav-link"
							:class="isActive === 'DesignView' && 'active'"
							type="button"
							data-name="DesignView"
							@click="changeView"
						>
							디자인
						</button>
					</li>
					<li class="nav-item">
						<button
							class="nav-link"
							:class="isActive === 'FrontView' && 'active'"
							type="button"
							data-name="FrontView"
							@click="changeView"
						>
							프론트
						</button>
					</li>
					<li class="nav-item">
						<button
							class="nav-link"
							:class="isActive === 'CookView' && 'active'"
							type="button"
							data-name="CookView"
							@click="changeView"
						>
							요리
						</button>
					</li>
					<li class="nav-item">
						<button
							class="nav-link"
							:class="isActive === 'SwimView' && 'active'"
							type="button"
							data-name="SwimView"
							@click="changeView"
						>
							수영
						</button>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>

<script setup>
const props = defineProps({
	isActive: String,
});
const emit = defineEmits(['changeView']);
const changeView = e => {
	emit('changeView', e.target.dataset.name);
};
</script>

<style lang="scss" scoped></style>
