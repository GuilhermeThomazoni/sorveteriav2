botao.addEventListener('click', function(){

    var nomeCliente = nome.value;
    var quantiaSorvetes = qtd.value;
    var saborSorvete = sabor.value;
  
    pedidoNome.innerHTML = "Nome: " + nomeCliente;
    pedidoQuantia.innerHTML = "Quantia: " + quantiaSorvetes;
    pedidoSabor.innerHTML = "Sabor: " + saborSorvete;
  });