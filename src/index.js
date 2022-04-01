import NavigationBar from './components/navigation-bar/navigation-bar';
import Footer from './components/footer/footer';

const navigationItems = [
	{
		url: '/',
		title: 'Home',
	},
	{
		url: '/apple',
		title: 'Aple',
	},
	{
		url: '/tesla',
		title: 'Tesla',
	},
];
const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;
switch (url) {
	case '/':
		import('./home').then((HomePageModule) => {
			const HomePage = HomePageModule.default;
			const home = new HomePage();
			home.render();
		});
		break;
	case '/apple':
		import('./apple').then((ApplePageModule) => {
			const ApplPage = ApplePageModule.default;
			const applPage = new ApplPage();
			applPage.render();
		});
		break;
	case '/tesla':
		import('./tesla').then((TeslaPageModule) => {
			const TeslaPage = TeslaPageModule.default;
			const teslaPage = new TeslaPage();
			teslaPage.render();
		});
		break;

	default:
		import('./home').then((HomePageModule) => {
			const HomePage = HomePageModule.default;
			const home = new HomePage();
			home.render();
		});
		break;
}
const footer = new Footer();
footer.render();
