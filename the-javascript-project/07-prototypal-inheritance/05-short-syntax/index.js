const user1 = {
    firstname: "cassidy",
    age: 11,
    about() {
        console.log(`firstname = ${this.firstname}`);
        console.log(`age = ${this.age}`);
    }
}; user1.about();