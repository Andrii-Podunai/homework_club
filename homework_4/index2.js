let simpleObg1 = {
  name: "first",
};
let simpleObg2 = {
  name: "second",
};
let simpleObg3 = {
  name: "third",
};
let classObg1 = new Object();
classObg1.name = "first classObg";

let classObg2 = new Object();
classObg2.name = "second classObg";

let classObg3 = new Object();
classObg3.name = "third classObg";

let newCassObg1 = Object.create(classObg1);
newCassObg1.evaluation = 5;

let newCassObg2 = Object.create(null);
newCassObg2 = {
  evaluation: 10,
  __proto__: classObg2,
};

class Person {
  constructor(gender) {
    this.gender = gender;
  }
  writeInformationPerson() {
    console.log(`You are ${this.gender}`);
  }
}

class Engineer extends Person {
  constructor(gender, name, age) {
    super(gender);
    this.name = name;
    this.age = age;
  }
  writeInformationEngineer() {
    super.writeInformationPerson();
    console.log(`Name: ${this.name}, age:${this.age}`);
  }
}

class QA_engineer extends Engineer {
  constructor(gender, name, age, direction, salary) {
    super(gender, name, age);
    this.direction = direction;
    this.salary = salary;
  }
  writeInformationQAEngineer() {
    super.writeInformationEngineer();
    console.log(`direction: ${this.direction}, salary: ${this.salary}`);
  }
}
let newPerson = new Person("Male");
let newEngineer = new Engineer("Female", "Sabrina", 19);
let newQA_engineer = new QA_engineer("Male", "Alex", 37, "QA", 3500);

newPerson.writeInformationPerson();
newEngineer.writeInformationEngineer();
newQA_engineer.writeInformationQAEngineer();
