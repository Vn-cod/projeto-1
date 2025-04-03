// Data do início do relacionamento (09 de março de 2025)
const dataInicio = new Date("2025-03-09T00:00:00").getTime();

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = agora - dataInicio;

    // Se a data ainda não chegou, exibe uma mensagem especial
    if (diferenca < 0) {
        document.getElementById("timer").innerHTML = "Ainda não começou! ❤️";
        setTimeout(atualizarContador, 1000);
        return;
    }

    // Calculando dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualizando o HTML com o tempo
    document.getElementById("timer").innerHTML = `
        <span>${dias}</span> dias, 
        <span>${horas}</span> horas, 
        <span>${minutos}</span> minutos e 
        <span>${segundos}</span> segundos
    `;

    // Atualiza a cada segundo
    setTimeout(atualizarContador, 1000);
}

// Inicia o contador ao carregar a página
atualizarContador();

// Selecionando os elementos
const audio = document.getElementById("player");
const playPauseBtn = document.getElementById("playPauseBtn");
const startMusicBtn = document.getElementById("startMusicBtn");

// Tenta tocar a música automaticamente quando a página carrega
window.addEventListener("load", () => {
    audio.play().then(() => {
        startMusicBtn.classList.add("hidden"); // Esconde o botão se tocar automaticamente
    }).catch(() => {
        startMusicBtn.classList.remove("hidden"); // Mostra o botão se o navegador bloquear a reprodução
    });
});

// Se o usuário tocar na tela, iniciar a música
document.body.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        startMusicBtn.classList.add("hidden"); // Esconde o botão após tocar
    }
}, { once: true }); // Esse evento só acontece uma vez

// Botão para iniciar a música manualmente se necessário
startMusicBtn.addEventListener("click", () => {
    audio.play();
    startMusicBtn.classList.add("hidden");
});

// Botão para pausar/reproduzir a música
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = "⏸️ Pausar Música";
    } else {
        audio.pause();
        playPauseBtn.innerText = "▶️ Tocar Música";
    }
});