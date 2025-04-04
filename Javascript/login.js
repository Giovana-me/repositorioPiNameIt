document.addEventListener("DOMContentLoaded", function () {
    let botaoSubmit = document.querySelector(".submit");

    if (botaoSubmit) {
        botaoSubmit.addEventListener("click", function (event) {
            event.preventDefault(); 
            console.log("Redirecionando para telainicial.html...");
            window.location.href = "telainicial.html";
        });
    } else {
        console.error("Erro: O botão 'Entrar' não foi encontrado. Verifique a classe no HTML.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var helpImage = document.querySelector(".help-button");

    if (helpImage) {
        helpImage.addEventListener("click", function () {
            window.location.href = "ajuda.html";
        });
    }
});