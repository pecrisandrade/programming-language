class EstoqueBicicletas{
	constructor(loja, fabricante){
		this.loja = loja
		this.fabricante = fabricante
		this.array = []	
	}
	metod_validar(){

		if(['Shimano', 'Monarc', 'Normai'].includes(this.fabricante) ==false){
			return 'ERROR fabricante 1 indisponível'
		}
		
		if(['Igarassu', 'Paulista', 'Abreu e Lima'].includes(this.loja) ==false){
			return 'ERROR fabricante 1 indisponível'
		}
	}
	metod_linha(){
		switch (this.fabricante) {
			case 'Shimano':
			this.linha = 0
			break;
			case 'Monarc':
			this.linha = 1
			break;
			case 'Normai':
			this.linha = 2
			break;
			default:
		}

	}
	
	metod_array(n){
		array.push(n)
	}
}




m1 = new EstoqueBicicletas('Igarassu' , 'Shimano');
m2 = new EstoqueBicicletas('Abreu e Lima','Monarc');
m3 = new EstoqueBicicletas('Igarassu' , 'Normai');
m4 = new EstoqueBicicletas('Abreu e Lima','Monarc');
m5 = new EstoqueBicicletas('Paulista' , 'Shimano');
m6 = new EstoqueBicicletas('Abreu e Lima','Normai');
m7 = new EstoqueBicicletas('Igarassu' , 'Shimano');
m8 = new EstoqueBicicletas('Paulista','Monarc');

console.log(m1.metod_array(), m2.metod_array(), m3.metod_array(), m4.metod_array(), m5.metod_array(), m6.metod_array(), m7.metod_array(), m8.metod_array())