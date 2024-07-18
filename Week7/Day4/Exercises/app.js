import people from './data.js';


function averageAge(people) {
    if (people.length === 0){
        console.log('The array is empty.');
    return;
}

const totalAge = people.reduce((sum, person)=> sum + person.age, 0);
const averageAge = totalAge / people.length;

console.log(`Average age is: ${averageAge.toFixed(2)}`);

}
averageAge(people);

