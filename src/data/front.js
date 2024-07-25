const games = [
	{
		type: 'Class',
		title: 'CSS Diner',
		text: '이 게임 마스터하면 CSS로 뭐든 다 선택할 수 있습니다.',
		url: 'https://flukeout.github.io/',
	},
	{
		type: 'Flex',
		title: 'Flexbox Froggy',
		text: 'CSS flexbox 속성 배우기 게임, 개구리를 모두 집으로 보내주세요!',
		url: 'https://flexboxfroggy.com/#ko',
	},
	{
		type: 'Grid',
		title: 'Grid Garden',
		text: '당근 정원을 키우기 위한 CSS 코드를 작성하는 Grid Garden에 오신 것을 환영합니다! Grid-column-start 속성을 사용하여 당근이 있는 부분에만 물을 줍니다.',
		url: 'https://cssgridgarden.com/#ko',
	},
	{
		type: 'Flex',
		title: 'Flexbox Defense',
		text: 'CSS 코드로 대포를 배치해서 몰려드는 적들을 물리치는 디펜스 게임',
		url: 'http://www.flexboxdefense.com/',
	},
];

export const fetchGames = () => {
	return games;
};
