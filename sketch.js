var nome = "Maria";
var matriz = []

var aluno =  {
  nome: "Luiz",
  numeroClasse: 7,
  materiaFavorita:"Programação",
  notas: [40,80,70,100]

}

function setup() {
  createCanvas(400, 400);

  //Acessar um valor de um atributo específico
  console.log(aluno.notas);
  console.log(aluno.numeroClasse);
  console.log(aluno.materiaFavorita);

  //Mudar valor de um atributo
  aluno.numeroClasse = 40;
 // console.log(aluno.numeroClasse);
}

function draw() {
  background(220);
}