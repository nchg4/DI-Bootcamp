const winBattle = () => {
    return true;
};

// Using arrow function
const experiencePoints = winBattle() ?10 : 1;

// log the experiencePoints variable
console.log(experiencePoints); 

// Output is going to be 10 (since winBattle() returns true)