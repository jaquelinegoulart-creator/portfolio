let nome = document.querySelector("#texto");
nome.textContent = "Jaqueline";

let nome = prompt ("Qual é o seu nome?");
if (nome == null){
    texto.textContent = "seja bem-vindo(a)!";
}
else{
    texto.textContent = nome;
}