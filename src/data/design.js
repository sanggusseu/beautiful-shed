const references = [
	{
		type: '공통',
		title: '핀터레스트: Pinterest',
		text: '요리법, 집 꾸미기 아이디어, 영감을 주는 스타일 등 시도해 볼 만한 아이디어를 찾아서 저장하세요.',
		url: 'https://kr.pinterest.com/',
	},
	{
		type: '모바일',
		title: 'WWIT - 윗',
		text: '모바일 UI/UX 디자이너를 위한 최고의 레퍼런스 사이트',
		url: 'https://wwit.design/',
	},
	{
		type: '공통',
		title: '지디웹: GDWEB',
		text: 'WEB/UX 분야 최고의 디자인을 선정 및 발표합니다.',
		url: 'https://www.gdweb.co.kr/main/',
	},
	{
		type: '공통',
		title: '디비컷',
		text: '웹디자인 평가 및 우수 웹사이트 모음',
		url: 'https://www.dbcut.com/',
	},
	{
		type: '공통',
		title: 'RWDB',
		text: 'RWDB Responsive Web Design dB Web awards, 우수 하이브리드웹·반응형웹 모음 사이트.',
		url: 'http://rwdb.kr/',
	},
	{
		type: '공통',
		title: '디비딕',
		text: '카테고리별 웹디자인 벤치마킹 서비스, 웹사이트 디자인 벤치마킹, 홈페이지 디자인 벤치마킹.',
		url: 'http://dbdic.co.kr/',
	},
	{
		type: '모바일',
		title: 'Mobbin',
		text: 'Mobbin은 UX 및 UI 디자인 패턴에 대한 이해를 높이고자 하는 디자이너를 위한 게임 체인저입니다. 그것은 매우 방대하고, 세심하게 조직되어 있으며, 깊이가 있습니다.',
		url: 'https://mobbin.com/',
	},
	{
		type: '모바일',
		title: '디자이너스',
		text: '세상의 모든 디자이너들을 위한 공간, 디자이너스(Designus)',
		url: 'https://designus.io/',
	},
	{
		type: '공통',
		title: 'Lapa Ninja',
		text: 'Lapa Ninja는 최고의 6418 랜딩 페이지 디자인을 갖추고 있습니다. 전체 웹사이트 스크린샷을 통해 실제 랜딩 페이지 예시에서 영감을 얻으세요.',
		url: 'https://www.lapa.ninja/',
	},
	{
		type: '공통',
		title: 'Land-book',
		text: '엄선된 최고의 웹사이트 디자인 영감을 찾아보세요. 우리는 매일 업데이트되는 크리에이티브를 위한 선별된 웹사이트 디자인 갤러리입니다.',
		url: 'https://land-book.com/',
	},
];

const colors = [
	{
		title: 'Color Hunt',
		text: 'Color Hunt의 엄선된 최신 컬러 팔레트를 만나보세요. 디자인 및 예술 프로젝트에 대한 색상 영감을 얻으세요.',
		url: 'https://colorhunt.co/',
	},
	{
		title: 'Coolors',
		text: '디자인에 맞는 아름다운 색상 조합을 생성하거나 찾아보세요.',
		url: 'https://coolors.co/',
	},
	{
		title: 'Adobe Color',
		text: '색상 휠을 색상 생성기로 사용할 수 있습니다. 또는 이미지에서 색상 팔레트나 색상 그레이디언트를 추출하고 접근성을 준수하는 색상 팔레트를 만들 수 있습니다.',
		url: 'https://color.adobe.com/ko/',
	},
	{
		title: 'Color Palette Ideas',
		text: '모든 상황에 맞는 무료 색상 팔레트 아이디어 컬렉션: 집, 아파트, 침실, 주방, 거실, 심지어 결혼식까지 우리 색상으로 장식하세요.',
		url: 'https://colorpalettes.net/',
	},
	{
		title: 'ColorSpace',
		text: '여기에서 다음 프로젝트에 완벽하게 어울리는 색 구성표를 찾을 수 있습니다! 멋진 색상 팔레트, 색상 그라디언트 등을 생성하세요!',
		url: 'https://mycolor.space/',
	},
	{
		title: 'LOL Colors',
		text: '엄선된 색상 팔레트 영감',
		url: 'https://www.webdesignrankings.com/resources/lolcolors/',
	},
	{
		title: 'ColorDrop',
		text: '수천 개의 색상 팔레트를 탐색하거나 나만의 색상 팔레트를 만들어보세요. 영감을 원하는 디자이너와 예술가에게 이상적입니다. 지금 컬러 여행을 시작해보세요!',
		url: 'https://colordrop.io/',
	},
	{
		title: 'Gradient Hunt',
		text: '매일 업데이트되는 엄선된 컬렉션에 수천 가지의 트렌디한 색상 그라데이션이 포함되어 있습니다. 다음 디자인 프로젝트를 위한 새로운 색상 그라데이션을 얻고 모든 내용을 저장하세요',
		url: 'https://gradienthunt.com/',
	},
	{
		title: 'uiGradients',
		text: '디자이너와 개발자를 위해 엄선된 아름다운 색상 그라데이션 컬렉션입니다.',
		url: 'https://uigradients.com/#EmeraldWater',
	},
	{
		title: 'Blend',
		text: '블렌드 — CSS 그라디언트 생성기.',
		url: 'https://colinkeany.com/blend/',
	},
	{
		title: 'Two Color combinations',
		text: '아래에서 잘 어울리는 두 가지 색상의 조합을 직접 찾아보세요. 다음 웹/디자인 프로젝트에 사용하세요.',
		url: 'https://2colors.colorion.co/',
	},
	{
		title: 'My Mind Color Palettes',
		text: '좋아하는 색상 조합을 모아보세요. 좋아하는 색상 조합을 모두 쉽게 저장할 수 있고, 영감을 얻을 수 있는 장소를 상상해 보세요.',
		url: 'https://access.mymind.com/colors',
	},
];

export const fetchReferences = () => {
	return references;
};

export const fetchColors = () => {
	return colors;
};
