class Grade {
  constructor() {
    this.grades = [];
    this.grades.push(
      {
        id: 1,
        name: "Asaad Saad",
        course: "CS572",
        grade: 97
      },
      {
        id: 2,
        name: "Bilegjargal",
        course: "CS572",
        grade: 95
      }
    );
  }

  getAll() {
    return this.grades;
  }

  getGradeById(id) {
    return this.grades.filter(this.grades.id == id);
  }

  addGrade(grade) {
    this.grades.push(grade);
    console.log("Grade added");
  }

  removeGrade(id) {
    for (let i = 0; i < this.grades.length; i++) {
      if (this.grades[i].id == id) {
        this.grades.splice(i, 1);
        return console.log("Grade deleted");
      }
    }
    return console.log("Not found");
  }
}

module.exports = new Grade();
