/** Object & Classes */

let user = {
    name: "Or",
    email: "orib@yahoo.com",
    age: 24,
}

// console.log(user.name, user["name"]);


/** looping an object  */
for(let key in user){
    // console.log(key, user[key]);
}


/** Object methods */ 

/** Object.keys */
let keys = Object.keys(user)
console.log(keys);


Object.keys(user).forEach(key => {
    console.log(key);
})


/** Object.values */
let values = Object.values(user)
console.log(values);

Object.values(user).forEach((item) => {
    console.log(item);
});



/** Object.enteries */
let ents = Object.entries(user);
console.log(ents);

Object.entries(user).forEach((item) => {
    const[a,b] = item
    console.log(a,b);
});


/** Object.fromEntries */
let arr = [
    ["name", "Ido"],
    ["email", "Ido@gmail.com"]
]
let obj = Object.fromEntries(arr)
console.log(obj);

/** Object method 
 * a method inside an object
*/
let studunt = {
    name: "Liora",
    age: 23,
    hello: function(){
        // console.log(name); //wont work...
        console.log(this.name);
        // console.log(params);
    },

};
studunt.hello()
//this --global obj (the window obj in the browser)
console.log(this);


//keys, values, entries are the most common used, fromEntries not sm//



/** Spreading */

let user1 ={
    name: "Marc",
    age: 24,
}

// let user2 = {...user1};
let user2 = {...user1, email: "marc@gmail.com", age:30};   //overwriting user 1 but only for display in user 2



console.log(user1);
console.log(user2);


/** destructuring */
// let [a,b] = [1,3];
const{name, age, email} =user2;
console.log(name, age, email);


let user3 = { ...user1, ...user2}  //cloning two users...if i clone user 2 first and then user 1, the age will be 24 not 30
console.log(user3);

/** clone / Deep clone */ //deep cloning does NOT clone methods 
let userr ={
    name: "Nathan",
    age:26,
}
let userr2 = {...userr};
userr2.address = { ...userr.address};
let userr3 = Object.assign({}, userr);



let user4 = JSON.parse(JSON.stringify(userr))  ///after learning from below...you can do this
// user4.address.city = 'TLV'
console.log((user4, userr));

/**JSON */
/** JSON.stringify */
/** JSON.parse */

let numbers = {
    a: "1",
    b: "2",
};
console.log(numbers); //this will display as an object
let json = JSON.stringify(numbers)
console.log(json); //this will display as a string

let obj2 = JSON.parse(json)
console.log(obj2);


/** Classes */
/** classes 
 constructor MUST be at the top
 cannot be CANNOT be an arrow function
 only constructor(){...} --no other way 
*/
class NameOfClass{
    constructor(type){
        this.name = 'Annaelle',
        this.type = type
    }
    method1(){}
    method2 = () => {}
}

class Animal {
    constructor(type, name){
        this.name = name
        this.type = type
    }
    getName(){
        return this.name
    }

    setName(name){
        this.name = name;
    }
    // set type(val){
    //     if (val === 'blabla') return;
    //     this._type
    // }
}

// let mydog = new Animal('Dog', 'Rex');
// let urdog = new Animal('Dog', 'Spots');

// let cat = new Animal('Cat', 'Mittens');

// console.log(mydog);
// urdog.setName('Arrow')

// console.log(ur.getName());
// console.log(cat);
// cat.type = 'Cow'
// console.log(cat.type);

class Dog extends Animal{
    constructor(name, color){
        super('Dog', name);
        this.color = color;
    }
    voice(){
        return 'Bark'
    }
}
 let dog1 = new Dog('CouCou', 'Brown');

 let dog2 = new Dog('Cookie', 'Red');


 console.log(dog1);
 console.log(dog2.getName());
 console.log(dog1.type);
 console.log(dog2.voice());


 class Frenchie extends Dog {
    constructor(name, subtype, color){
        super(name, color)
        this.subtype = 'French Bulldog'
    }
 }

 let frenchie1 = new Frenchie('Bubbles', 'Gray');
 console.log(frenchie1);