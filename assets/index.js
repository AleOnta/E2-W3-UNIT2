class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // NOT STATIC METHOD OF THE CLASS
  compareAge(p) {
    if (this.age > p.age) {
      return this.name + " is older then " + p.name;
    } else if (this.age === p.age) {
      return this.name + " & " + p.name + " have the same age.";
    } else {
      return p.name + " is older then " + this.name;
    }
  }

  /* STATIC METHOD FOR THE CLASS
  static compareAge(p1, p2) {
    if (p1.age > p2.age) {
      return p1.name + " is older then " + p2.name;
    } else if (p1.age === p2.age) {
      return p1.name + " & " + p2.name + " have the same age.";
    } else {
      return p2.name + " is older then " + p1.name;
    }
  }
  */
}

let p1 = new Person("Marco", 25);
let p2 = new Person("Giulia", 25);
let p3 = new Person("Enzo", 19);

// console.log(Person.compareAge(p1, p3)); <-- STATIC METHOD CONSOLE.LOG
console.log(p1.compareAge(p2));
