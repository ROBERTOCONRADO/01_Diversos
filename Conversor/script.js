function converter() {
    let gramas_ouro = document.getElementById("gramas_ouro").value;
    let valor_reais = document.getElementById("valor_reais");

    let resultado = gramas_ouro * 298.69;

    valor_reais.innerText = `R$= ${resultado}`;
};