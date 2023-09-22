var names   = ["João", "Felipe", "Matheus"]
var grades1 = [5.4, 7.8, 8.5]
var grades2 = [8.5, 10, 10]

for(var i = 0; i<3 ; i++){
  var student = names[i]

  var mult1 = grades1[i] * 0.6
  var mult2 = grades2[i] * 0.4
  var add = mult1 + mult2

alert("Nome do Aluno: " + student + "\nNota 1: " + grades1[i] + "\nNota 2: " + grades2[i])
alert("Nome do Aluno: " + student + "\nNota Final: " + add)
}
