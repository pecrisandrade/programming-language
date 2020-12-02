class Microondas{ 											
	constructor(marca, tipo){ 								
		this.marca = marca; 
		this.tipo = tipo;
	} 

	metod_preco(){
		switch (this.marca) {
			case 'Brastemp':
			this.preco = 2000
			this.garantia = '10 anos';
			break;
			case 'Philco':
			this.preco = 900
			this.garantia = '2 anos';
			break;
			case 'Electrolux':
			this.preco = 1100
			this.garantia = '3 anos';
			break;
			case 'LG':
			this.preco = 1500
			this.garantia = '5 anos';
			break;
			case 'Consul':
			this.preco = 1250
			this.garantia = '3 anos'
			break;
			default:
			console.log('marca', marca, 'não encontrada');
		}
	}
	metod_tipo(){ 
		var i = 0
		var array2 = []
		var array1 = ['pipoca', 'descongelar', 'esquentar', 'legumes', 'brigadeiro', 'grill', 'arroz', 'carne']

		if(this.tipo == 0){
			i = 2;
		}if(this.tipo == 1){
			i = 4;
			this.preco = 1.2*this.preco
		}if(this.tipo == 2){
			i = 7;
			this.preco = 1.5*this.preco
		}
		for(var a = 0; a <= i; a++){
			array2.push(array1[a])
		}
		return array2
	}
	


}

class Estoque{
	constructor(){
		this.estoque = []
	}
	metod_add(n){
		this.estoque.push(n)
	}
}
function quantidade (est){
	return est.estoque.length
}




m1 = new Microondas( "LG", 2)	
m2 = new Microondas( "Brastemp", 1)
m3 = new Microondas( "Electrolux", 0)
m4 = new Microondas( "Philco", 1)
m5 = new Microondas( "Consul", 2)

console.log(m1)
console.log(m2)
console.log(m3)
console.log(m4)
console.log(m5)

est = new Estoque()
est.metod_add(m1)
est.metod_add(m2)
est.metod_add(m3)
est.metod_add(m4)
est.metod_add(m5)

console.log('a quantidade do estoque:', quantidade(est))