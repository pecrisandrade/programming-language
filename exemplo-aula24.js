class retangulo{
	constructor(base,altura){
		this.base = base;
		this.altura = altura;
	}
}

var r1 = new retangulo(3,5)
r1.base = 10

console.log(r1)

function ret(){
	return ret.base*ret.altura
}

console.log(ret(5))