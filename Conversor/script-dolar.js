function converter() {
    let dolar = document.getElementById("dolar").value;
    let valor_reais = document.getElementById("valor_reais");

    let resultado = dolar * 5.25;

    valor_reais.innerText = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};