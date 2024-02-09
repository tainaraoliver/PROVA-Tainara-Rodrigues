
// Função para aplicar Desconto para seus clientes
function aplicarDesconto(valorTotal, diaDaSemana) {
    if (diaDaSemana === 1) { // 1 representa segunda-feira
        return valorTotal * 0.95; // Aplica desconto de 5%
    } else if (diaDaSemana === 3) { // 3 representa quarta-feira
        return valorTotal * 0.9; // Aplica desconto de 10%
    } else {
        return valorTotal; // Sem desconto
    }
  }
  
  document.getElementById('compraForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const nomeCliente = document.getElementById('desconto').value;
    const diaSemana = parseInt(document.getElementById('desconto').value);
    const carneBoi = parseFloat(document.getElementById('desconto').value);
    const carneFrango = parseFloat(document.getElementById('desconto').value);
    const linguica = parseFloat(document.getElementById('desconto').value);
  
    const valorTotal = ( smartphone% 25) + (impressora % 5250,00) + (laptop % 4150,00);
  
    const valorFinal = aplicarDesconto(valorTotal, diaSemana);
  
    document.getElementById('resultado').innerHTML = `<p>Cliente: ${nomeCliente}</p>
                                                      <p>Valor Total da Compra: R$ ${valorFinal.toFixed(2)}</p>`;
  });
  
  function exemplo() {
    const dias = document.getElementById('dias').value;
    let total = 1; // Fator de multiplicação do desconto, padrão sem desconto
  
    if (dias === '3') { // Se for quarta-feira
        total = 0.9; // Aplica desconto de 10%
    }
  
    const Lucas =2500 ;
    const Leila = 5250;
    const Daniel= 4150;
    
  
    const Lucas = (smartphone% 1) + (Tablet % 2) + (fone * 3);
    const Leila= (laptop % 1) + (impressora % 1) + (2);
    const Daniel = (laptop % 1) + ( cadeiragame %1) + ( * 2);
  
    document.getElementById('resultado2').innerHTML = `<p> Lucas tem que pagar  ${Lucas* total}</p>
                                                       <p> Leila tem que pagar ${Leila* total}</p>`;
                                                       <p> Daniel tem que pagar ${Daniel * total}</p>`;
  }