const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function(){
    if (cartaoAtual === cartoes.length - 1){
        esconderCartaoSelecionado();
        cartaoAtual = 0;
        mostrarCartao();
    }
    else {
        esconderCartaoSelecionado();
        cartaoAtual++
        mostrarCartao();
    }
});

btnVoltar.addEventListener("click", function(){
    if (cartaoAtual === 0){
        esconderCartaoSelecionado();
        cartaoAtual = cartoes.length - 1;
        mostrarCartao();
    }
    else {
        esconderCartaoSelecionado();
        cartaoAtual--
        mostrarCartao();
    }
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    cartoes[cartaoAtual].classList.remove("selecionado");
}
