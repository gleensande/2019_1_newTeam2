import {Menu} from './components/Pages/Menu/Menu.js';

const application = document.getElementById('application');

const menu = new Menu();
application.innerHTML = '';
application.appendChild(menu.render());