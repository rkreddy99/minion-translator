var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

outputDiv.innerText = "Translation will be displayed here!!"

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    alert("Error from server");
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translated = json.contents.translated;
            outputDiv.innerText = translated;
        })
        .catch(errorHandler);
};

if (btnTranslate) {
    btnTranslate.addEventListener("click", clickHandler);
}