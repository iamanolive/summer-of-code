class Animal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    eat(favoriteFood) { return `i am eating ${favoriteFood}` }
    isSuperCute() { return this.age <= 1 }
    isCute() { return true }
}

const animal1 = new Animal("tom", 2);
console.log(animal1);
console.log(animal1.eat("fish"));
console.log(animal1.isSuperCute());
console.log(animal1.isCute());


class Dog extends Animal {}
const tommy = new Dog("tommy", 3);
console.log(tommy);
console.log(tommy.isCute());