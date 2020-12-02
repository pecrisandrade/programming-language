class Balanca {   												// deve-se usar class
	constructor(marca, pesoMaximo) {
		this.marca = marca
		this.pesoMaximo = pesoMaximo
	}
}


function imprimirBalanca(Balanca) {    							//a class Balanca é com o b maiúsculo					// a forma certa de escrever é function
	console.log('marca:' , Balanca.marca)
    return 'peso máximo: ' +Balanca.pesoMaximo					//deve-se usar aspas, e nao acento agudo, para usar string
}																// a variavel usada tem B maiúsculo	
																//usei um return para evitar o undefined