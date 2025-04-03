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