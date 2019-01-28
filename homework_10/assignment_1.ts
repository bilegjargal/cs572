type deptType = "ComPro" | "MBA";
class University {
  name: string;
  dept: deptType;
  constructor(name: string, dept: deptType) {
    this.name = name;
    this.dept = dept;
  }

  graduation(year: number): void {
    console.log(`Graduating ${this.dept} ${year} students`);
  }
}

const mum: University = new University("MUM", "ComPro");
mum.graduation(2019);
