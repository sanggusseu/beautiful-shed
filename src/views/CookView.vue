<template>
	<SectionRow>
		<SectionTitle>🍳 매일 먹어도 안 질리는 레시피 모음</SectionTitle>
		<FeaturedCard
			v-for="(recipe, i) in recipes"
			:key="i"
			:type="recipe.type"
			:title="recipe.title"
			:text="recipe.text"
			:url="recipe.url"
		>
		</FeaturedCard>
	</SectionRow>
</template>

<script setup>
import FeaturedCard from '@/components/FeaturedCard.vue';
import SectionRow from '@/components/SectionRow.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { fetchRecipes } from '@/data/cook';
import { ref } from 'vue';
const recipes = ref([]);
recipes.value = fetchRecipes();
</script>

<style lang="scss" scoped></style>
