/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 24 - Exercício Individual - Registros
 * Questão: 1b
 *
 */

class bike{
	constructor(modelo, fabricante, cor){
		this.modelo = modelo;
		this.fabricante = fabricante;
		this.cor = cor; 
	}
	metod_validar1(){

		if(['urbana', 'montanha', 'estrada', 'infantil'].includes(this.modelo) == false){
			return 'ERROR modelo 1 indisponível'
		}
		if(['Shimano', 'Monarc', 'Normai'].includes(this.fabricante) ==false){
			return 'ERROR fabricante 1 indisponível'
		}

		if(['preta', 'vermelha', 'rosa', 'azul'].includes(this.cor) == false){
			return 'ERROR cor 1 indisponível'
		}

		return m1
	}
	metod_validar2(){

		if(['urbana', 'montanha', 'estrada', 'infantil'].includes(this.modelo) == false){
			return 'ERROR modelo 2 indisponível'
		}
		if(['Shimano', 'Monarc', 'Normai'].includes(this.fabricante) ==false){
			return 'ERROR fabricante 2 indisponível'
		}

		if(['preta', 'vermelha', 'rosa', 'azul'].includes(this.cor) == false){
			return 'ERROR cor 2 indisponível'
		}
		return m2
	}
}

class Estoque{
	constructor(){
		this.estoque = []
		this.Shimano = []
		this.Monarc = []
		this.Normai = []
	}
	metod_add(n){
		this.estoque.push(n)
		if(est[n] == this.Shimano){
			this.Shimano.push(n)
		}if(est[n] == this.Monarc){
			this.Monarc.push(n)
		}if(est[n] == this.Normai){
			this.Normai.push(n)
		}
	}
}

function quantidade (est){
	return est.estoque.length
}

function disponibilidade (est, a){
	if(a == 'Monarc'){	
		return 'temos ' +est.Monarc.length+ ' Monarc'
	}if(a == 'Shimano'){
		return 'temos ' +est.Shimano.length+ ' Shimano'
	}if(a == 'Normai'){
		return 'temos ' +est.Normai.length+ ' Normai'
	}
}

m1 = new bike ('urbana', 'Shimano', 'rosa');
m2 = new bike('infantil', 'Monarc', 'rosa');
m3 = new bike('urbana', 'Monarc', 'rosa');
m4 = new bike('montanha', 'Normai', 'rosa');
m5 = new bike('estrada', 'Shimano', 'rosa');
m6 = new bike('infantil', 'Monarc', 'rosa');

est = new Estoque()

est.metod_add(m1.fabricante)
est.metod_add(m2.fabricante)
est.metod_add(m3.fabricante)
est.metod_add(m4.fabricante)
est.metod_add(m5.fabricante)
est.metod_add(m6.fabricante)

console.log(est.estoque)
console.log('o estoque possui', quantidade(est), 'bicicletas')
console.log(disponibilidade(est, 'Shimano' ))
