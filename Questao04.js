class student{
  constructor(name, lastName, grade1, grade2){
    this.name = name
    this.lastName = lastName
    this.grade1 = grade1
    this.grade2 = grade2
  }

  fullName(){
    return this.name + this.lastName
  }

  media(){
    var add = this.grade1 + this.grade2
    return add / 2
  }

  situation(){
    if(this.media() < 6){
      return "Reprovado!"
    } else{
      return "Aprovado!"
    }
  }

  showAll(){
    var name = this.name
    var lastName = this.lastName
    var grade1 = this.grade1
    var grade2 = this.grade2

    alert("Nome do Aluno: " + name + "\nNota 1: " + grade1 + "\nNota 2: " + grade2 + "\nSituação: " + this.situation())
  }
}

const s1 = new student("Murillo", "Araujo", 10, 10);
const s2 = new student("Vitor", "Cardoso", 9, 9);
const s3 = new student("Gustavo", "Oliveira", 5, 8);
const s4 = new student("Eduardo", "Ferrari", 7, 8.5);
const s5 = new student("Ulisses", "Fernandez", 9, 6);

const students = [s1, s2, s3, s4, s5]

for(var i = 0; i<5; i++){

  students[i].showAll()
  
}
