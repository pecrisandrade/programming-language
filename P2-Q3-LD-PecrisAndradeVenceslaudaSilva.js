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
 * Letra: d
 *
 */


 class Sombrinha {
 	constructor (tamanho, cor, preco){
 		this.tamanho = tamanho
 		this.cor = cor
 		this.preco = preco
 	}
 	metod_validar(){

 		if(['pequena', 'media', 'grande'].includes(this.tamanho) == false){
 			return 'ERROR: tamanho indisponível'
 		}
 		if(['branca', 'rosa', 'vermelha', 'preta', 'azul', 'lilás', 'amarela', 'verde'].includes(this.cor) ==false){
 			return 'ERROR: cor indisponível'
 		}

 	}
 }

 class Estoque{
 	constructor (){
 		this.estoque = []
 		this.preco = []

 	}
 	metod_add(n){
 		this.estoque.push(n)
 		return this.estoque
 	}
 	metod_comparar(){
 		var indice = 0
 		var comparar = 1000

 		for(var i = 0; i < this.estoque.length; i++){
 			if(comparar > this.estoque[i].preco){
 				comparar = this.estoque[i].preco
 				indice = i
 			}
 		}
 		return (this.estoque[indice]) 	
 	}

 	metod_preco(p){
 		this.preco.push(p)
 		return this.preco
 	}
 }

 


 s1 = new Sombrinha('grande', 'preta', 80)
 s2 = new Sombrinha('pequena', 'lilás', 45)
 s3 = new Sombrinha('media', 'rosa', 60)
 s4 = new Sombrinha('grande', 'amarela', 85)
 s5 = new Sombrinha('pequena', 'verde', 50)
 s6 = new Sombrinha('media', 'branca', 60)
 
 est = new Estoque()

 est.metod_preco(s1.preco)
 est.metod_preco(s2.preco)
 est.metod_preco(s3.preco)
 est.metod_preco(s4.preco)
 est.metod_preco(s5.preco)
 est.metod_preco(s6.preco)

 est.metod_add(s1)
 est.metod_add(s2)
 est.metod_add(s3)
 est.metod_add(s4)
 est.metod_add(s5)
 est.metod_add(s6)
 
 console.log(est.metod_comparar())