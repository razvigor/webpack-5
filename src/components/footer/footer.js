import './footer.scss';

class Footer {
	render() {
		const p = document.createElement('p');
		const s = document.createElement('span');
		const year = new Date().getFullYear();
		s.textContent = year;
		p.textContent = 'Copyright© ';
		p.appendChild(s);
		document.querySelector('#footer').appendChild(p);
	}
}
export default Footer;
