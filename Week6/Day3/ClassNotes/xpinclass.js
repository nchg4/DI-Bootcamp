/**
 * Create a User class+
 * Store the name of the user in a "name" variable+
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exetends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */

class User{
    constructor(name){
        this.name = name;
    }
    hello(){
        console.log(`Hello ${this.name}`);
    }
}

class Students extends User{
    constructor(name){
        super(name)
    }
}

const arrayOfStudents = [
    new Students("Abby"),
    new Students("Alexia")
]
console.log(arrayOfStudents);