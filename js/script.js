// Arquivo: script.js

// 1. Seleciona todos os boxes de informação diretamente
const infoBoxes = document.querySelectorAll('.info-box');

// 2. Para cada box, adiciona um "ouvinte" de clique
infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // 3. A mágica acontece aqui:
        // A função 'toggle' adiciona a classe 'ativo' se ela não existir,
        // e remove se ela já existir.
        box.classList.toggle('ativo');
    });
});
