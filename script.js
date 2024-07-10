function encryptText() {
    const input = document.getElementById('input-text').value;
    const encryptedText = input
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    document.getElementById('output-text').value = encryptedText;
    clearInput();
    toggleOutputContent(false);
}

function decryptText() {
    const input = document.getElementById('input-text').value;
    const decryptedText = input
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    document.getElementById('output-text').value = decryptedText;
    clearInput();
    toggleOutputContent(false);
}

function clearInput() {
    document.getElementById('input-text').value = '';
}

function toggleOutputContent(showDefault) {
    const outputMessageContainer = document.getElementById('output-message-container');
    const outputResultContainer = document.getElementById('output-result-container');

    if (showDefault) {
        outputMessageContainer.classList.remove('hidden');
        outputResultContainer.classList.add('hidden');
    } else {
        outputMessageContainer.classList.add('hidden');
        outputResultContainer.classList.remove('hidden');
    }
}

function copyText() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

document.addEventListener('DOMContentLoaded', () => {
    toggleOutputContent(true);
});
