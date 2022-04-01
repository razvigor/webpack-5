import './navigation-bar.scss';

class NavigationBar {
  render(navigationItems) {
    const liItems = navigationItems.map(navigationItem => {
      return `
                <li>
                    <a href="${navigationItem.url}">${navigationItem.title}</a>
                </li>
            `;
    });
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    ul.innerHTML = liItems.join('');
    ul.classList.add('navigation-bar');
    nav.appendChild(ul);
    document.querySelector('#header').appendChild(nav);
  }
}

export default NavigationBar;
