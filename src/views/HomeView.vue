<template>
	<MainHeader @change-view="onChangeView" :is-active="isActive"></MainHeader>
	<main class="container my-5 py-5">
		<component :is="currentView"></component>
	</main>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import MainHeader from '@/layouts/MainHeader.vue';
import DesignView from './DesignView.vue';
import FrontView from './FrontView.vue';
import CookView from './CookView.vue';
import SwimView from './SwimView.vue';

const views = {
	DesignView,
	FrontView,
	CookView,
	SwimView,
};
const isActive = ref('DesignView');
const currentView = shallowRef(views[isActive.value]);
const onChangeView = name => {
	isActive.value = name;
	currentView.value = views[name];
};
</script>

<style lang="scss" scoped></style>
