// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
//  
// Person.prototype.eat = function() {
//   console.log(`${this.name} is eating`);
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}

class Eat{}

const person1 = new Person("Jijul", 20);
const person2 = new Person("Abdul", 20);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();  

console.log(typeof Eat);