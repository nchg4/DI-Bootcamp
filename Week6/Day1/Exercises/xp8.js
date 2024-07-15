// Part I

function makeJuice(size) {
    // Inner function 
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`);
    }

    addIngredients('apple', 'orange', 'banana');
}

makeJuice('medium');
