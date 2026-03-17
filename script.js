// Lista de palavras
const palavras = ["javascript", "python", "dados", "programacao", "html"];

// Variáveis do jogo
let palavraSecreta = "";
let palavraOculta = [];

// Função iniciar
function iniciar() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

    palavraOculta = Array(palavraSecreta.length).fill("_");

    atualizarTela();

    console.log("Palavra secreta:", palavraSecreta); // só pra debug
}

// Atualiza o que aparece na tela
function atualizarTela() {
    document.getElementById("palavra").innerText = palavraOculta.join(" ");
}

// Captura teclas
document.addEventListener("keydown", function(event) {
    let letra = event.key.toLowerCase();

    if (letra.match(/[a-z]/)) {
        verificarLetra(letra);
    }
});

// Verifica letra
function verificarLetra(letra) {
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] === letra) {
            palavraOculta[i] = letra;
        }
    }

    atualizarTela();
}

// Resetar
function resetar() {
    iniciar();
}

// Pista
function pista() {
    alert("Dica: palavra relacionada à tecnologia 💻");
}
