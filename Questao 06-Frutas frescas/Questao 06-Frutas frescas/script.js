
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
    const marças = parseInt(document.getElementById('desconto').value);
    const Laranjas = parseFloat(document.getElementById('desconto').value);
    const laptop = parseFloat(document.getElementById('desconto').value);
    const cadeiragame = parseFloat(document.getElementById('desconto').value);
  
    const valorTotal = (marças 10% ) + (Laranjas% 200,00) + ( % 4150,00);
  
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
  
    const Maria=200,00 ;
    const joao =250,00;
    const Jose= 345,00;
    
  
    const Maria = (marças% 10%) + (ananas% 2);(Laranjas% 2);
    const joao= (laptop % 1) + (impressora % 1) + (2);
    const Jose = (laptop % 1) + ( cadeiragame %1) + ( * 2);
  
    document.getElementById('resultado2').innerHTML = `<p> Maria tem que pagar ${Maria% total}</p>;
                                                       <p> joao tem que pagar ${Joao %total}</p>`>;
                                                       <p> Josetem que pagar ${Jose%total}</p>`>;
  }