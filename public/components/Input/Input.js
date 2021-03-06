'use strict';

const inputTemplate = require('Templates/Input.pug');

const validTypes = ['text', 'email', 'tel', 'password'];

export class Input {
    constructor(object = {
        id: '',
        type: 'text',
        value: '',
        placeholder: '',
        maxlen: 50,
        label: '',
        disabled: '',
    }) {
        object.type = validTypes.includes(object.type)? object.type : 'text';
        this._object = object;
    }

    render() {
        let el = document.createElement('div');
        el.innerHTML = inputTemplate(this._object);
        return el;
    }
}
