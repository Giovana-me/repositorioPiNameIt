document.addEventListener('DOMContentLoaded', () => {
    const botaoCadastrar = document.querySelector('button');
    botaoCadastrar.addEventListener('click', (event) => {
        event.preventDefault(); 
        const nome = document.getElementById('nome').value.trim();
        const sobrenome = document.getElementById('sobrenome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if (!nome || !sobrenome || !email || !senha) {
            alert('Por favor, preencha todos os campos.');
        } else if (senha.length < 4) {
            alert('A senha deve ter no mínimo 4 caracteres.');
        } else {
            alert('Cadastro realizado com sucesso!');
        }
    });
});