import router from './services/router.js';

import {LeaderboardController} from "./controllers/LeaderboardController.js";
import {MenuController} from "./controllers/MenuController.js";
import {ProfileController} from "./controllers/ProfileController.js";
import {SignupController} from "./controllers/SignupController.js";
import {LoginController} from "./controllers/LoginController.js";
import {DictionaryController} from "./controllers/DictionaryController.js";
import {CardController} from "./controllers/CardController.js";

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then((reg) => {
            // console.log(reg);
        })
        .catch((err) => {
            // console.log(err);
        });
}

const views = {
    '': MenuController,
    'menu': MenuController,
    'login': LoginController,
    'dictionaries/me': DictionaryController,
    'leaderboard': LeaderboardController,
    'signup': SignupController,
    'cards': CardController,
    'profile/me': ProfileController
};

Object.entries(views).forEach(element => {
    router.register(element[0], views[element[0]]);
});

router.render();
