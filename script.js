// Lista de palavras
const palavras = ["javascript", "python", "dados", "analise", "tecnologia"];

// Estado do jogo
let palavraSecreta = "";
let palavraOculta = [];
let erros = 0;
const maxErros = 6;
let letrasErradas = [];

// Iniciar jogo
function iniciar() {
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = Array(palavraSecreta.length).fill("_");
    erros = 0;
    letrasErradas = [];

    atualizarTela();
    atualizarStatus();

    console.log("Palavra:", palavraSecreta);
}

// Atualiza palavra na tela
function atualizarTela() {
    document.getElementById("palavra").innerText = palavraOculta.join(" ");
}

// Atualiza status
function atualizarStatus() {
    document.getElementById("erros").innerText = `Erros: ${erros}/${maxErros}`;
    document.getElementById("letras-erradas").innerText =
        `Letras erradas: ${letrasErradas.join(", ")}`;
}

// Captura teclado
document.addEventListener("keydown", function (event) {
    let letra = event.key.toLowerCase();

    if (letra.match(/[a-z]/) && palavraSecreta !== "") {
        verificarLetra(letra);
    }
});

// Verifica letra
function verificarLetra(letra) {
    if (palavraOculta.includes(letra) || letrasErradas.includes(letra)) {
        return;
    }

    if (palavraSecreta.includes(letra)) {
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                palavraOculta[i] = letra;
            }
        }
    } else {
        erros++;
        letrasErradas.push(letra);
    }

    atualizarTela();
    atualizarStatus();
    verificarFim();
}

// Verifica vitória ou derrota
function verificarFim() {
    if (!palavraOculta.includes("_")) {
        setTimeout(() => alert("🎉 Você venceu!"), 100);
        palavraSecreta = "";
    }

    if (erros >= maxErros) {
        setTimeout(() => alert(`💀 Você perdeu! Palavra: ${palavraSecreta}`), 100);
        palavraSecreta = "";
    }
}

// Resetar jogo
function resetar() {
    iniciar();
}

// Pista
function pista() {
    alert("Dica: palavra relacionada à tecnologia 💻");
}
