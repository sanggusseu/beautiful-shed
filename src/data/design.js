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
	{
		type: '공통',
		title: 'Behance',
		text: '고용인과 크리에이터가 영감을 발견하는 것부터 서로 연결하는 것까지, 크리에이티브 세상을 탐색할 수 있도록 돕는 포괄적인 플랫폼입니다.',
		url: 'https://www.behance.net/',
	},
	{
		type: '공통',
		title: 'Dribbble',
		text: '전 세계 수백만 명의 최고 등급 디자이너 및 에이전시의 작품에서 영감을 얻으세요.',
		url: 'https://dribbble.com/',
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

const images = [
	{
		type: '아이콘',
		title: 'FLATICON',
		text: '프로젝트에 맞는 무료 아이콘과 스티커를 다운로드하세요. 디자이너에 의해, 디자이너를 위해 만들어진 리소스입니다. PNG, SVG, EPS, PSD 및 CSS 형식.',
		url: 'https://www.flaticon.com/',
	},
	{
		type: '아이콘',
		title: 'Noun Project',
		text: 'FLATICON과 사용방법은 비슷한 아이콘 사이트, 다만 회원 가입을 해야만 아이콘을 다운로드 받을 수 있다.',
		url: 'https://thenounproject.com/',
	},
	{
		type: '아이콘',
		title: 'freepik',
		text: '고품질 사진, 비디오, 벡터, PSD, AI 이미지, 아이콘... 아이디어를 뛰어난 디자인으로 구현',
		url: 'https://www.freepik.com/',
	},
	{
		type: '아이콘',
		title: 'Font Awesome',
		text: '인터넷의 아이콘 라이브러리 + 툴킷. 수백만 명의 디자이너, 개발자, 콘텐츠 제작자가 사용합니다. 오픈 소스. 항상 무료입니다. 항상 대단해요.',
		url: 'https://fontawesome.com/',
	},
	{
		type: '아이콘',
		title: 'Material Symbols & Icons - Google Fonts',
		text: '머티리얼 디자인 아이콘 지침. 아이콘에 대한 최신 모범 사례에 대해 알아보세요.',
		url: 'https://fonts.google.com/icons',
	},
	{
		type: '이미지',
		title: 'Pixabay',
		text: '460만 개 이상의 고품질 스톡 이미지, 비디오 및 음악이 재능 있는 커뮤니티에서 공유됩니다.',
		url: 'https://pixabay.com/',
	},
	{
		type: '이미지',
		title: 'Pic Jumbo',
		text: '웹사이트, 템플릿, 블로그 게시물 또는 디자인에 사용할 무료 이미지, 배경 및 무료 사진을 다운로드하세요. 그리고 배경화면도 있어요!',
		url: 'https://picjumbo.com/',
	},
	{
		type: '이미지',
		title: 'Gratisography',
		text: '로열티 무료 HD 스톡 사진 및 이미지 정말 독특합니다. 보통은 기발해요 ;) 항상 무료입니다. 저작권 제한이 없는 안심 라이센스!',
		url: 'https://gratisography.com/',
	},
	{
		type: '이미지',
		title: 'LittleVisuals',
		text: '무료 고해상도 이미지.',
		url: 'https://littlevisuals.co/',
	},
	{
		type: '이미지',
		title: 'Stocksnap',
		text: '아름다운 무료 스톡 사진',
		url: 'https://stocksnap.io/',
	},
	{
		type: '이미지',
		title: 'Unsplash',
		text: '어떤 프로젝트를 위해서든 다운로드 및 사용할 수 있는 아름다운 무료 이미지 및 사진입니다. 어떤 로열티 프리 또는 스톡 사진보다 좋습니다.',
		url: 'https://unsplash.com/ko',
	},
];

export const fetchReferences = () => {
	return references;
};

export const fetchColors = () => {
	return colors;
};

export const fetchImages = () => {
	return images;
};
