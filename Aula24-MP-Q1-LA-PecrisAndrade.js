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
 * Questão: 1a
 *
 */

 class Bike{
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


 m1 = new Bike('infantil', 'Shimano', 'rosa');
 m2 = new Bike('urbana', 'Monarc', 'preta');
 console.log(m1.metod_validar1(), m2.metod_validar2());
 console.log(JSON.stringify(m1) === JSON.stringify(m2));