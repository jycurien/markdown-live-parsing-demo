window.addEventListener('DOMContentLoaded', () => {

    const textareaElt = document.querySelector('#js-input-text');
    const parsedTextDiv = document.querySelector('#js-parsed-text');

    textareaElt.addEventListener('keyup', () => {
        const text = textareaElt.value;
        parsedTextDiv.innerHTML = marked(text);
    });

});