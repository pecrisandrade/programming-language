/*
 *
 * Instituto Federal de Educação, Ciência e Tecnologia - IFPE
 * Cursos: Informática para Internet | Sistemas para Internet
 * Componentes Curriculares: Lógica de Programação e Estrutura de Dados | Introdução à Programação Imperativa
 * Professor: Allan Lima - allan.lima@igarassu.ifpe.edu.br
 *
 * Nome completo: Pecris Andrade Venceslau da Silva
 * Curso: TSI
 * Aula: Aula 27 - Segunda Avaliação Individual
 * Questão: 3
 * Letra: a
 *
 */

 class Sombrinha {
 	constructor (tamanho, cor){
 		this.tamanho = tamanho
 		this.cor = cor
 	}
 	metod_validar(){

 		if(['pequena', 'media', 'grande'].includes(this.tamanho) == false){
 			return 'ERROR: tamanho indisponível'
 		}
 		if(['branca', 'rosa', 'vermelha', 'preta', 'azul', 'lilás', 'amarela', 'verde'].includes(this.cor) ==false){
 			return 'ERROR: cor indisponível'
 		}
 		return s1
 	}
 	metod_preco(){
 		if(this.tamanho == 'pequena'){
 			var preco = 30
 		}if(this.tamanho == 'media'){
 			var preco = 50
 		}else{
 			var preco = 75
 		}
 		return preco+ ' Reais'
 	}
 }

 s1 = new Sombrinha('grande', 'preta')

 console.log(s1.metod_validar(), ' no valor de ', s1.metod_preco())