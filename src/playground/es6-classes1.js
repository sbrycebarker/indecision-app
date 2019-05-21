// Setup constructor to take name and age (default to 0)
// getdDescription - Sergio Barker is 38 year(s) old

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hello. I am ${ this.name }`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation
  }
  getGreeting(){
    let greeting = super.getGreeting();

    if (this.hasHomeLocation()) {
      greeting += ` Hi. I am ${this.name} I am visting from ${this.homeLocation}.`
    }
    return greeting
  }
}

const me = new Traveler('Sergio Barker', 38, 'Provo, Ut');
console.log(me.getGreeting())

const other = new Traveler();
console.log(other.getGreeting())
