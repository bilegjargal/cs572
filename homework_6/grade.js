class Grade {
  constructor(id, name, course, grade) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.grade = grade;
  }
}

const grade = new Grade(1, "Bilegjargal", "CS572", 97);
console.log(grade);
