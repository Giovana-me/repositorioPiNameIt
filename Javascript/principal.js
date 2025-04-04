document.addEventListener("DOMContentLoaded", function () {
    let botaoJogar = document.querySelector(".botaoJogar");

    if (botaoJogar) {
        botaoJogar.addEventListener("click", function () {
            window.location.href = "login.html";
        });
    } else {
        console.error("Erro: O botão 'Jogar' não foi encontrado. Verifique a classe no HTML.");
    }
});
