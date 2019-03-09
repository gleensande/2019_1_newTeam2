import {Menu} from '../components/Pages/Menu/Menu.js';

const pages = {
    menu : Menu
}

export class RenderModule{
    render (application, item) {
        application.innerHTML = '';
        const page = new pages[item]();
        application.appendChild(page.render())
    }
}