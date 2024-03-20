var textEntrada = document.querySelector("#input-text");
var outInput = document.querySelector("#output");


function criptografar(){

  var texto = textEntrada.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultCripto + 
  '</textarea>'
}

function descriptografar(){

    var texto = textEntrada.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultDescripto + 
    '</textarea>' 
}

function copiar() {
    var texto = outInput.querySelector('textarea').value;
    navigator.clipboard.writeText(texto)
        .then(function() {
            alert('Texto copiado para a área de transferência.');
        })
        .catch(function(error) {
            console.error('Erro ao copiar texto: ', error);
        });
}