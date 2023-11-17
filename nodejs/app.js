// const { remote } = require('electron');
const clan = remote.require('./clan.js')

const button = document.getElementById('fetch');
const inputValue = document.getElementById('clantag')
const textBox = document.getElementById('textBox');

button.onclick = buttonClick;

function buttonClick() {
    const clantag = inputValue.value;
    (async () => {
        await clan.TrophyList(clantag);
    })();
}