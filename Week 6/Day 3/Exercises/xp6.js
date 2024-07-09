//1
// Evaluate these (ie True or False)

// [2] === [2] false
// {} === {} false

// 2
// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4; object1.number was changed to 4 and obj 2 is = to obj1
console.log(object3.number) //4; ^ same explaination 
console.log(object4.number) // 5; object4 is equal to 5 therefore obj4s output is 5

//3
class Animal {
    constructor(type, name, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
}

class Mamal extends Animal {
    constructor(type, name, color){
        super(type, name, color)
    }
    sound(sound){
        return `${sound} I am a ${this.type}, my name is ${this.name} and I am ${this.color}`
    }
}

let farmerCow = new Mamal ('cow', 'Lilly', 'white with brown spots');

let result = farmerCow.sound('Mooooooo')
console.log(result);
  



