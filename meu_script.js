
function inserir(numero) {
	document.getElementById('resultado').innerHTML += numero
}

function limparResultado() {
	document.getElementById('resultado').innerHTML = ''
}

function remover () {
	var resultado = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular () {
	var resultado = document.getElementById('resultado').innerHTML
	
	if(resultado) {
		document.getElementById('resultado').innerHTML = eval(resultado)
	}
}