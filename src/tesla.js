import Heading from './components/heading/heading';
import { getNews } from './components/functions/functions';
import { articleItem } from './components/functions/functions';

class Tesla {
	render() {
		const heading = new Heading();
		heading.render('Tesla');
		const data = getNews(
			'https://newsapi.org/v2/everything?q=tesla&from=2022-03-01&sortBy=publishedAt&apiKey=ce5e9162c7b3458c859b24f84808594c'
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
export default Tesla;
