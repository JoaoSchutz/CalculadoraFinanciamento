//CAPTURA OS ELEMENTOS DOS INPUTS.
var valor = document.getElementById('valor');
var prazoano = document.getElementById('prazoano');
var prazomes = document.getElementById('prazomes');
var jurosano = document.getElementById('jurosano');
var jurosmes = document.getElementById('jurosmes');
var jurosacum = document.getElementById('jurosacum');

//CAPTURA OS ELEMENTOS DA TABELA.
var armo1 = document.getElementById('armo1');
var juros1 = document.getElementById('juros1');
var total1 = document.getElementById('total1');
var armo2 = document.getElementById('armo2');
var juros2 = document.getElementById('juros2');
var total2 = document.getElementById('total2');
var armo3 = document.getElementById('armo3');
var juros3 = document.getElementById('juros3');
var total3 = document.getElementById('total3');
var armo4 = document.getElementById('armo4');
var juros4 = document.getElementById('juros4');
var total4 = document.getElementById('total4');
var armo5 = document.getElementById('armo5');
var juros5 = document.getElementById('juros5');
var total5 = document.getElementById('total5');

let limpardados = document.querySelectorAll('input');

//CHAMA FUNÇÃO LIMPAR CAMPOS CASO PÁGINA SEJA RECARREGADA.
window.addEventListener('load', function()
{
  limpar();
}
)

//FUNÇÃO QUE CALCULA PRAZO(meses).
function prazo ()
{
  var resultado = prazoano.valueAsNumber * 12;
  prazomes.valueAsNumber = resultado;
}

//FUNÇÃO QUE CALCULA JUROS AO MÊS.
function jurosaomes ()
{
  var parenteses = 1 + jurosano.valueAsNumber;
  var resultado = Math.pow(parenteses, 1/12) - 1;
  jurosmes.valueAsNumber = resultado;
}

var jurosmesresultado = jurosmes.valueAsNumber;
var valortotal = valor.valueAsNumber;

//FUNÇÃO QUE CALCULA JUROS ACUMULADOS.
function jurosacumulados ()
{
  var i;
  var total = valor.valueAsNumber;
  var parcelas = prazomes.valueAsNumber;
  var amortizacaomensal = 833.33;
  var totaldejuros = 0;
  var jurosmestodo = jurosmes.valueAsNumber
  for (i = 0; i < parcelas; i++)
  {
    var saldoDevedor = total - i * amortizacaomensal;
    var jurosmensal = saldoDevedor * jurosmestodo;
    totaldejuros = totaldejuros + jurosmensal;
    jurosacum.valueAsNumber = totaldejuros.toFixed(3);
  }
}

//LISTA DE FUNÇÕES REFERENTES ÀS LINHAS DA TABELA.

function linha1 ()
{
  var amortizacao = valor.valueAsNumber / prazomes.valueAsNumber;
  var juros = jurosmes.valueAsNumber * valor.valueAsNumber;
  var total = amortizacao + juros;
  armo1.textContent = amortizacao.toFixed(2);
  juros1.textContent = juros.toFixed(2);;
  total1.textContent = total.toFixed(2);;
}

function linha2 ()
{
  var amortizacao = valor.valueAsNumber / prazomes.valueAsNumber;
  var juros = jurosmes.valueAsNumber * (valor.valueAsNumber - (1 * amortizacao));
  var total = amortizacao + juros;
  armo2.textContent = amortizacao.toFixed(2);
  juros2.textContent = juros.toFixed(2);;
  total2.textContent = total.toFixed(2);;
}

function linha3 ()
{
  var amortizacao = valor.valueAsNumber / prazomes.valueAsNumber;
  var juros = jurosmes.valueAsNumber * (valor.valueAsNumber - (2 * amortizacao));
  var total = amortizacao + juros;
  armo3.textContent = amortizacao.toFixed(2);
  juros3.textContent = juros.toFixed(2);;
  total3.textContent = total.toFixed(2);;
}

function linha4 ()
{
  var amortizacao = valor.valueAsNumber / prazomes.valueAsNumber;
  var juros = jurosmes.valueAsNumber * (valor.valueAsNumber - (3 * amortizacao));
  var total = amortizacao + juros;
  armo4.textContent = amortizacao.toFixed(2);
  juros4.textContent = juros.toFixed(2);;
  total4.textContent = total.toFixed(2);;
}

function linha5 ()
{
  var amortizacao = valor.valueAsNumber / prazomes.valueAsNumber;
  var juros = jurosmes.valueAsNumber * (valor.valueAsNumber - (4 * amortizacao));
  var total = amortizacao + juros;
  armo5.textContent = amortizacao.toFixed(2);
  juros5.textContent = juros.toFixed(2);;
  total5.textContent = total.toFixed(2);;
}

function limpar ()
{
  valor.value = "";
  prazoano.value = "";
  prazomes.value = ""; 
  jurosano.value = ""; 
  jurosmes.value = ""; 
  jurosacum.value = ""; 
  armo1.textContent = "";
  juros1.textContent = "";
  total1.textContent = "";
  armo2.textContent = "";
  juros2.textContent = "";
  total2.textContent = "";
  armo3.textContent = "";
  juros3.textContent = "";
  total3.textContent = "";
  armo4.textContent = "";
  juros4.textContent = ""; 
  total4.textContent = ""; 
  armo5.textContent = ""; 
  juros5.textContent = ""; 
  total5.textContent = ""; 
}