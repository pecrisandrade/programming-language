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
 * Questão: 4
 *
 */

 class ComponenteCurricular {
     constructor(nome, professor, estudantes) {                                 // não é necessario function
     	this.nome = nome
     	this.professor = professor
        this.estudantes = estudantes                                            // a varievel é estudantes com S no final
    }
}

class Estudante{																// é necessario criar a class Estudante
	constructor(nome, nota){
		this.nome = nome
		this.nota = nota
	}
}

function notaEstudante(componente, estudante) {
	let nota = 0
	
     for (var i = 0; i < componente.estudantes.length; i++) {                     //faltou iniciar a variavel i
     	if (estudante.nome == componente.estudantes[i].nome) {
     		nota = componente.estudantes[i].nota 								  // faltou dizer qual variavel da classe estudante deve ser acessada
     	} 
     }
    return nota
}

var cc1 = new ComponenteCurricular('portugues', 'Allan', [])
var a1 = new Estudante('Pecris', 8.0)
var a2 = new Estudante()
a2.nome = 'Lucian'
a2.nota = 5.5

cc1.estudantes.push(a1)															//criação de um array com os estudantes
cc1.estudantes.push(a2)

console.log(notaEstudante(cc1, a1))