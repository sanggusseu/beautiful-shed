<template>
	<SectionRow>
		<SectionTitle>🎮 재밌는 게임으로 복습해용</SectionTitle>
		<FeaturedCard
			v-for="(game, i) in games"
			:type="game.type"
			:title="game.title"
			:text="game.text"
			:url="game.url"
			:key="game.url + i"
		></FeaturedCard>
	</SectionRow>
</template>

<script setup>
import FeaturedCard from '@/components/FeaturedCard.vue';
import SectionRow from '@/components/SectionRow.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { fetchGames } from '@/data/front';
import { ref } from 'vue';
const games = ref([]);
games.value = fetchGames();
</script>

<style lang="scss" scoped></style>
