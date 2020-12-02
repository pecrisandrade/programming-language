
//	R$:     2000 	  900	   1100	   1500  1250						p  c,e   l     b
//marca: (brastemp, philco, electrolux, LG, consul); anos de garantia: (2,  3,   5,   10); preço(basico:x1, padrao:x1.2, premium:x1.5 );
//			|			BASICO 0 		 |		   PADRAO 1	   |	PREMIUM 2	  	|
//funçoes: (pipoca, descongelar, esquentar, legumes, brigadeiro, grill, arroz, carne)



class Microondas{ 											// objeto
	constructor(marca, tipo){ 								//constructor: os atributos do objeto
		this.marca = marca; 
		this.tipo = tipo;
		this.preco = 0
		this.garantia = 0
	} 
	    													// this.marc = variavel que passeia por toda class
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
	metod_tipo(){ //tipo = 0, 1, 2
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


m1 = new Microondas( "LG", 2)
m2 = new Microondas('Brastemp', 1) 
m3 = new Microondas('Consul', 0)
m1.metod_preco()
m2.metod_preco()
m3.metod_preco()					
console.log(m1, 'com as funções', m1.metod_tipo())
console.log(m2, 'com as funções', m2.metod_tipo())
console.log(m3, 'com as funções', m3.metod_tipo())							//m1 objeto