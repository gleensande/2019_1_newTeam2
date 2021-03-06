import {Controller} from 'Controllers/Controller.js';
import {Training} from 'Views/Training/Training.js';
import {GameWordsModel} from 'Models/GameWordsModel.js';
import {DictionaryModel} from 'Models/DictionaryModel.js';

export class TrainingController extends Controller {
    index() {
        this.view = new Training();
        this.view.render();
        this.dictModel = new DictionaryModel();
        this.dictModel.getSelfDicts();
        this.gameModel = new GameWordsModel();
        
        this.page = 1;
        this.rows = 5;
        
        this.listeners = new Set ([
            ['prev-page', this._onprevpage],
            ['next-page', this._onnextpage],
            ['dict-selected', this._ondictselected],
            ['training-finished', this._ontrainingfinished],
        ]);

        super.subscribeAll();
    }

    _ondictselected(dictID) {
        this.gameModel.getCards(dictID, 10);
    }

    _ontrainingfinished(result) {
        this.gameModel.sendResult(result);
    }

    _onprevpage() {
        this.page = this.page < 2 ? 1 : this.page - 1;
        this.dictModel.getSelfDicts({rows: this.rows, page: this.page});
    }

    _onnextpage() {
        this.page++;
        this.dictModel.getSelfDicts({rows:this.rows, page:this.page});
    }
}