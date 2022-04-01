import './heading.scss';

class Heading {
  render(pageName) {
    const h1 = document.createElement('h1');
    const main = document.querySelector('#main');
    h1.innerHTML = `${pageName} News`;
    main.prepend(h1);
  }
}

export default Heading;
