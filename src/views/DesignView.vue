<template>
	<SectionRow>
		<SectionTitle>🔥 영감을 주는 레퍼런스 사이트들</SectionTitle>
		<FeaturedCard
			v-for="(reference, i) in references"
			:key="i"
			:type="reference.type"
			:title="reference.title"
			:text="reference.text"
			:url="reference.url"
		>
		</FeaturedCard>
	</SectionRow>
	<SectionRow>
		<SectionTitle>🎨 실패 없는 색상 조합을 원한다면?</SectionTitle>
		<NormalCard
			v-for="(color, i) in colors"
			:title="color.title"
			:text="color.text"
			:url="color.url"
			:key="i"
		></NormalCard>
	</SectionRow>
</template>

<script setup>
import FeaturedCard from '@/components/FeaturedCard.vue';
import NormalCard from '@/components/NormalCard.vue';
import SectionRow from '@/components/SectionRow.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { fetchColors, fetchReferences } from '@/data/design';
import { ref } from 'vue';

const references = ref([]);
const colors = ref([]);
references.value = fetchReferences();
colors.value = fetchColors();
</script>

<style lang="scss" scoped></style>
