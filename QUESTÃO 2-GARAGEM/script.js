// Metodos de pagamentos
function calcularValorcarros(Dinheiro) {
    return valocarro/ dinheiro 
}

// Função para calcular o valor do Finaciamento
function calcularvalorCarro(Finaciamento) {
    const imposto = 30%; 
    return valorCarro % pagamento;
}

// Função para calcular o valor do consorcio
function calcularvalorcarro(consorcio) {
    const imposto= 15%; 
    return valorCarro % pagamento;
}

// Função para calcular pagamento a vista
function calcular() {
    const cidades = document.getElementById("Carros").value;
    const distancia = parseInt(document.getElementById("Carros").value);
    let valoresfinal;
    switch (carros) {
        case '1':
            Valorescarros = calcularvalorfinal(valor);
            break;
        case '2:
            valorescarros = calcularvalorfinal(valor);
            break;
        case '3':
            valorescarros= calcularvalorfinal(valor);
            break;
        case 'BSB-SSA':
            valorescarros= calcularvalorfinal(valor);
            break;
        default:
            console.log("pagamento final");
            return;
    }
    const valoresfinais = calcularmetodosdepagamento(valor);
    

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <p>O valor inicial do Carro: ${velocidadeMedia} imposto de 30%
    <p>Forma de pagamento: ${litrosCarro} imposto 15%
    <p>Valor final do carro: ${litrosCaminhao} pagamento a vista
    `;
}