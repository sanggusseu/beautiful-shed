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
	<SectionRow>
		<SectionTitle>🍯 고퀄리티 무료 아이콘, 이미지 사이트들</SectionTitle>
		<FeaturedCard
			v-for="(image, i) in images"
			:key="image.url + i"
			:type="image.type"
			:title="image.title"
			:text="image.text"
			:url="image.url"
		>
		</FeaturedCard>
	</SectionRow>
</template>

<script setup>
import FeaturedCard from '@/components/FeaturedCard.vue';
import NormalCard from '@/components/NormalCard.vue';
import SectionRow from '@/components/SectionRow.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import { fetchColors, fetchImages, fetchReferences } from '@/data/design';
import { ref } from 'vue';

const references = ref([]);
const colors = ref([]);
const images = ref([]);
references.value = fetchReferences();
colors.value = fetchColors();
images.value = fetchImages();
</script>

<style lang="scss" scoped></style>
