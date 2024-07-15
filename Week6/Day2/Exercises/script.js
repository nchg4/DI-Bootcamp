/**xp1 */
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < colors.length; i++){
     let message = `My #${i + 1} favourite colour is ${colors[i]}`;
     console.log(message);
}
if (colors.includes("Violet")){        
        console.log("Yeah! Violet is here.");               
    } else{
        console.log("No...There is no violet here.");
    }

/**xp2 */
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

const getOrdinalSuffix = (index) => {
    const suffixIndex = index % 10;
    return ordinal[suffixIndex <= 3 ? suffixIndex : 0];
  };

  const formattedColor = (color, index) => {
    const suffix = getOrdinalSuffix(index + 1); 
    return `${index + 1}${suffix} choice is ${color}.`;
  };

  colors.forEach((color, index) => {
    console.log(formattedColor(color, index));
  });
  
  

/**xp3 */
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
//output:
//['bread', 'carrot, 'potato', 'chicken', 'apple', 'orange]


// ------2------
const country = "USA";
console.log([...country]);
//output:
//[ 'U', 'S', 'A']
//there is no [] around the USA so every letter is taken sepertaley
//if [] are added than the word will be complete and output will be ["USA"]


// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);
//output:
// [undefined, undefined]

/**xp4 */
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
//1
    let retArr = users.map((users) => {
        return `Hello ${users.firstName}`;}
    );
    console.log(retArr);

//2
let fullUsers = users.filter((item) => {
      return item.role.includes("Full Stack Resident");
    });
    console.log(fullUsers);


/**xp5 */
const epic = ['a' , 'long' , 'time' , 'ago' , 'in a' , 'galaxy' , 'far far' , 'away'];
let sum = epic.reduce((all, words) => all + " " + words);
console.log(sum);

/**xp6 */
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];
    

    let allWhoPassed = students.filter((students) => {
        return students.isPassed === true
    }
)
console.log(allWhoPassed);
