
function handleTranslation(encodingType) {

    
    const input = document.querySelector('#translator-input');
    const inputText = input.value;

    
    const output = document.querySelector('#results');

    if (encodingType === 'encode') {
        
        const encoding = encode(inputText);
        output.innerText = encoding;
    }

    else if (encodingType === 'translate') {
        
        const translation = translate(inputText);
        output.innerText = translation;
    }

    else if (encodingType === 'madlib') {
        
        const madlibbedText = madlib(inputText);
        output.innerText = madlibbedText;
    }

    else if (encodingType === 'search') {

        
        output.innerHTML = '';

        
        const emojiObjects = search(inputText);

        
        for (const emojiObject of emojiObjects) {
            
            const pTag = document.createElement('p');

            
            const emoji = emojiObject.symbol;
            pTag.innerText = emoji;

            
            output.appendChild(pTag);
        }
    }
}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function () {

    
    let checkedRadio;
    const radioButtons = document.querySelectorAll('[type="radio"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checkedRadio = radioButton.value;
        }
    }

    
    if (checkedRadio === 'random') {
        const options = ['encode', 'translate', 'madlib', 'search'];
        const option = randomElement(options);
        checkedRadio = option;
    }

    
    handleTranslation(checkedRadio);
});