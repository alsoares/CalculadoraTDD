var assert = require('assert');
var calculadora = require('./calculadora');

DeveriaRetornar3QuandoSomaTest();
DeveriaRetornar0QuandoSubtracaoTest();
DeveriaRetornar25QuandoMultiplicacaoTest();
DeveriaRetornar1QuandoDivisaoTest();
DeveriaRetornar1QuandoDividendoFor0Test();

function DeveriaRetornar3QuandoSomaTest(){
	
	var resultadoSomaDeDoisNumeros = calculadora.soma(3,0);
	
	assert.equal(resultadoSomaDeDoisNumeros, 3, 'O valor da soma de 3 e 0 deveria ser 3, veio ' + resultadoSomaDeDoisNumeros);
}

function DeveriaRetornar0QuandoSubtracaoTest(){
	
	var resultadoSubtracaoDeDoisNumeros = calculadora.subtracao(3,3);
	
	assert.equal(resultadoSubtracaoDeDoisNumeros, 0, 'O valor da subtração de 3 e 3 deveria ser 0, veio ' + resultadoSubtracaoDeDoisNumeros);
}

function DeveriaRetornar25QuandoMultiplicacaoTest(){
	
	var resultadoMultiplicacaoDeDoisNumeros = calculadora.multiplicacao(5,5);
	
	assert.equal(resultadoMultiplicacaoDeDoisNumeros, 25, 'O valor da multipicação entre 5 e 5 deveria ser 25, veio ' + resultadoMultiplicacaoDeDoisNumeros);
}

function DeveriaRetornar1QuandoDivisaoTest(){
	
	var resultadoDivisaoDeDoisNumeros = calculadora.divisao(1,1);
	
	assert.equal(resultadoDivisaoDeDoisNumeros, 1, 'O valor da divisao de 1 por 1 deveria ser 1, veio ' + resultadoDivisaoDeDoisNumeros);
	
}

function DeveriaRetornar1QuandoDividendoFor0Test(){
	
	var resultadoDivisaoDeDoisNumeros = calculadora.divisao(1,0);
	
	assert.equal(resultadoDivisaoDeDoisNumeros, 1, 'O valor da divisao de 1 por 0 deveria ser 1, veio ' + resultadoDivisaoDeDoisNumeros);
}

