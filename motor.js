function CalcForca() {
	var resultado, massa, aceleracao;

	massa = parseInt(document.getElementById('Massa').value);
	aceleracao = parseInt(document.getElementById('Aceleracao').value);

	resultado = massa * aceleracao;

	document.getElementById('forca').innerHTML = 
	"O resultado da força é: " + resultado + "N";
}

function CalcVelocidade() {
	var resultado, distancia, tempo;

	distancia = parseInt(document.getElementById('Distancia').value);
	tempo = parseInt(document.getElementById('Tempo').value);

	resultado = distancia / tempo;

	document.getElementById('VelMed').innerHTML = 
	"A velocidade média é: " + resultado + "KH";
}

function CalcFUNMUV() {
	var resultado, velfinal, velinicial, aceleracao, tempo;

	velinicial = parseInt(document.getElementById('VelocidadeInicial').value);
	aceleracao = parseInt(document.getElementById('Aceleracao').value);
	tempo = parseInt(document.getElementById('Tempo').value);

	resultado = velinicial + ( aceleracao * tempo )

	document.getElementById('VelFinal').innerHTML = 
	"O resultado da equação é: " + resultado + "MUV";
}

function CalcEqDTorr() {
	var resultado, velfinal, velinicial, aceleracao, tempo;

	velinicial = parseInt(document.getElementById('VelocidadeInicial').value);
	aceleracao = parseInt(document.getElementById('Aceleracao').value);
	tempo = parseInt(document.getElementById('Tempo').value);

	velfinal = (velinicial * velinicial) + ( 2 * aceleracao * tempo )

	resultado = velfinal * velfinal

	document.getElementById('VelFinal').innerHTML = 
	"O resultado da equação é: " + resultado + "VF";
}