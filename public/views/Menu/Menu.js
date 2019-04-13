'use strict';

import {Button} from '../../components/Button/Button.js';

import router from '../../services/router.js';

const loginedButtonNames = {
    //'train': 'Тренировка',
    'dictionaries/me': 'Мои словари',
    //'feed': 'Лента',
    'profile/me': 'Профиль',
    'leaderboard': 'Таблица лидеров',
    'login': 'Выйти'
};

const unloginedButtonNames = {
    //'trainSample': 'Пробная тренировка',
    'login': 'Войти',
    'leaderboard': 'Таблица лидеров',
    'signup': 'Зарегистрироваться'
};

const application = document.getElementById('application');

export class Menu {
    render({authorised = false}) {
        const outer = application;
        outer.innerHTML = '';
        outer.classList.add('centered');
        
        let buttons = [];

        const createButtons = (buttonNames) => {
            Object.entries(buttonNames).forEach( (name, i) => {
                buttons[i] = new Button ({type: 'primary', name: name[1]});
            });

            Object.entries(buttonNames).forEach( (name, i) => {
                buttons[i] = buttons[i].render();
                buttons[i].addEventListener('click', function () {        
                    router.go(name[0]);
                });
            });
        };

        if (authorised) {
            createButtons(loginedButtonNames);
        } else {
            createButtons(unloginedButtonNames);
        }
        
        buttons.forEach( item => {
            outer.appendChild(item);
        });
    }
}