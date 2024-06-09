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


class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }

    run() { return `${this.name} is running at ${this.speed} kmph` }
    eat() { return `modified eat() function` }
}

const tommy = new Dog("tommy", 3, 45);
console.log(tommy.speed);
console.log(tommy.run());
console.log(tommy.eat());