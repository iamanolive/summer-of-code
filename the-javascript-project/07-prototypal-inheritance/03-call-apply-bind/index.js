// the call() method
function hello() {
    console.log("hello, world!");
}; hello.call(); // same as hello();

const user1 = {
    firstname: "cassidy",
    age: 10,
    about: function () {
        console.log(this.firstname);
        console.log(this.age);
    }
};

const user2 = {
    firstname: "jacob",
    age: 9,
};

user1.about.call(); // undefined
user1.about.call(user1);
user1.about.call(user2);


const user3 = {
    firstname: "findley",
    age: 684,
    about: function (hobby, favoriteMusician) {
        console.log(this.firstname);
        console.log(this.age);
    }
};

const user4 = {
    firstname: "alice",
    age: 982,
};

user3.about.call(user4, "guitar");
user3.about.call(user3, "guitar", "mozart");

function moreAboutMe (hobby, favoriteMusician) {
    console.log(`my hobby is ${hobby}`);
    console.log(`my favorite musician is ${favoriteMusician}`);
}

moreAboutMe.call(user1, "comics", "beethoven");


// the apply() method
moreAboutMe.apply(user1, ["piano", "beethoven"]);
moreAboutMe.apply(user2, ["reading", "taylor swift"]);

// the bind() method
const func = moreAboutMe.bind(user1, "guitar", "bach");
func(); // bind returns a function



const anotherFunc1 = user1.about;
anotherFunc1(); // undefined
const anotherFunc2 = function () {
    // the value of "this" is window
    console.log(this.firstname);
    console.log(this.age);
}; anotherFunc2();

// binds to user1, so "this" = user1
const anotherFunc3 = user1.about.bind(user1);
anotherFunc3();