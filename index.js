const btnGerar = document.getElementById("btnGerar");
const resultado = document.getElementById("resultado");


function gerarSenha() {
    let letras = "abcdefghijklmnopqrstuvwxyz";
    let numeros = "123456789";
    let senha = "";

    for (let i = 0; i < 3; i++) {

        let letraAleatoria = letras[Math.floor(Math.random() * letras.length)];
        let numeroAleatorio = numeros[Math.floor(Math.random() * numeros.length)];

        senha += letraAleatoria + numeroAleatorio;

    }

    return senha;
}


btnGerar.addEventListener("click", () => {
    let senha = gerarSenha()

    resultado.innerHTML = `<p>Senha gerada: ${senha}</p>`
    resultado.style.color = "green"

    resultado.classList.remove("show")

    void resultado.offsetWidth   // FORÇA o navegador a reiniciar a animação

    resultado.classList.add("show")
})