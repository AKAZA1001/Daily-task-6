class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log(
      `My name is ${this.name}, I'm ${this.age} years old, and I am ${this.gender}.`
    );
  }
}
const person = new Person("John Doe", 25, "Male");
console.log(person.name);
console.log(person.age);
console.log(person.gender);
person.introduce();
