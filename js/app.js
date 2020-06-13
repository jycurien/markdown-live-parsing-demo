window.addEventListener('DOMContentLoaded', () => {

    const textareaElt = document.querySelector('#js-input-text');
    const parsedTextDiv = document.querySelector('#js-parsed-text');

    textareaElt.addEventListener('keyup', function() {
        const text = this.value;
        parsedTextDiv.innerHTML = marked(text);
    });

});