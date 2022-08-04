function converter() {
    let euro = document.getElementById("euro").value;
    let valor_reais = document.getElementById("valor_reais");

    let resultado = euro * 5.37;

    valor_reais.innerText = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};