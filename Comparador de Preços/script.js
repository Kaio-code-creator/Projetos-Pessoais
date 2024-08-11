function comparePrices() {
    const price1 = parseFloat(document.getElementById('price1').value);
    const measure1 = parseFloat(document.getElementById('measure1').value);
    const price2 = parseFloat(document.getElementById('price2').value);
    const measure2 = parseFloat(document.getElementById('measure2').value);
    
    if (isNaN(price1) || isNaN(measure1) || isNaN(price2) || isNaN(measure2)) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos em todos os campos.';
        return;
    }

    const unitPrice1 = price1 / measure1;
    const unitPrice2 = price2 / measure2;

    let resultText = '';

    if (unitPrice1 < unitPrice2) {
        resultText = 'O Produto 1 é mais barato proporcionalmente.';
    } else if (unitPrice2 < unitPrice1) {
        resultText = 'O Produto 2 é mais barato proporcionalmente.';
    } else {
        resultText = 'Os dois produtos têm o mesmo preço proporcional.';
    }

    document.getElementById('result').innerText = resultText;
}