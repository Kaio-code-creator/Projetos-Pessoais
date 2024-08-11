function convertToGrams(measure, unit) {
    switch (unit) {
        case 'gramas':
            return measure;
        case 'quilogramas':
            return measure * 1000;
        case 'mililitros':
            return measure;
        case 'litros':
            return measure * 1000;
        default:
            return measure;
    }
}

function convertToReais(price, unit) {
    return unit === 'centavos' ? price / 100 : price;
}

function comparePrices() {
    // Produto 1
    let price1 = parseFloat(document.getElementById('price1').value);
    let measure1 = parseFloat(document.getElementById('measure1').value);
    const priceUnit1 = document.getElementById('priceUnit1').value;
    const measureUnit1 = document.getElementById('measureUnit1').value;

    // Produto 2
    let price2 = parseFloat(document.getElementById('price2').value);
    let measure2 = parseFloat(document.getElementById('measure2').value);
    const priceUnit2 = document.getElementById('priceUnit2').value;
    const measureUnit2 = document.getElementById('measureUnit2').value;

    if (isNaN(price1) || isNaN(measure1) || isNaN(price2) || isNaN(measure2)) {
        document.getElementById('result').innerText = 'Por favor, insira valores válidos em todos os campos.';
        return;
    }

    // Conversão para unidades comuns
    price1 = convertToReais(price1, priceUnit1);
    price2 = convertToReais(price2, priceUnit2);
    measure1 = convertToGrams(measure1, measureUnit1);
    measure2 = convertToGrams(measure2, measureUnit2);

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