import Heading from './components/heading/heading';
import { getNews } from './components/functions/functions';
import { articleItem } from './components/functions/functions';

class Apple {
	render() {
		const heading = new Heading();
		heading.render('Apple');
		const data = getNews(
			'https://newsapi.org/v2/everything?q=apple&from=2022-03-31&to=2022-03-31&sortBy=popularity&apiKey=ce5e9162c7b3458c859b24f84808594c'
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
export default Apple;
