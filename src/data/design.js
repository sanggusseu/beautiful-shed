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
];

const colors = [
	{
		title: 'Color Hunt',
		text: 'Color Hunt의 엄선된 최신 컬러 팔레트를 만나보세요. 디자인 및 예술 프로젝트에 대한 색상 영감을 얻으세요.',
		url: 'https://colorhunt.co/',
	},
	{
		title: 'Gradient Hunt',
		text: '매일 업데이트되는 엄선된 컬렉션에 수천 가지의 트렌디한 색상 그라데이션이 포함되어 있습니다. 다음 디자인 프로젝트를 위한 새로운 색상 그라데이션을 얻고 모든 내용을 저장하세요',
		url: 'https://gradienthunt.com/',
	},
	{
		title: 'Two Color combinations',
		text: '아래에서 잘 어울리는 두 가지 색상의 조합을 직접 찾아보세요. 다음 웹/디자인 프로젝트에 사용하세요.',
		url: 'https://2colors.colorion.co/',
	},
];

export const fetchReferences = () => {
	return references;
};

export const fetchColors = () => {
	return colors;
};
