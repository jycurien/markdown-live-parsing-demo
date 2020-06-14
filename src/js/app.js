import 'knacss/css/knacss.css';
import '../css/app.css';
import marked from 'marked';

window.addEventListener('DOMContentLoaded', () => {

    const inputTextTextarea = document.querySelector('#js-input-text');
    const parsedTextDiv = document.querySelector('#js-parsed-text');

    inputTextTextarea.addEventListener('keyup', () => {
        const text = inputTextTextarea.value;
        parsedTextDiv.innerHTML = marked(text);
    });

});