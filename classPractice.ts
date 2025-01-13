class Employee {
  constructor(private _empName: string, private _age: number, private _empJob: string) {}

  get empName() {
    return this._empName;
  }

  set empName(empName: string) {
    this._empName = empName;
  }

  printExp(): void {
    console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
  }
}

let kim = new Employee('kim', 20, 'developer');
kim.empName = 'lee';
kim.printExp();
