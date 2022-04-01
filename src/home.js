import Heading from './components/heading/heading';
import { getNews, articleItem } from './components/functions/functions';

class Home {
	render() {
		const heading = new Heading();
		heading.render('Our Top');
		const data = getNews(
			'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce5e9162c7b3458c859b24f84808594c'
		);
		data
			.then((res) => {
				articleItem(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}
}
export default Home;
