module.exports = {

	soma: function (valorA, valorB){
		return valorA + valorB;
	},
	subtracao: function (valorA, valorB){
		return valorA - valorB;
	},
	multiplicacao: function (valorA, valorB)
	{
		return valorA * valorB;
	},
	divisao: function (divisor, dividendo){
		
		if(dividendo == 0) return 1;
		return divisor / dividendo;
	}
	
}


/*
Or even just:
exports.method = function() {};
exports.otherMethod = function() {};
Then in the calling program:

var MyMethods = require('./myModule.js');
var method = MyMethods.method;
var otherMethod = MyMethods.otherMethod;*/