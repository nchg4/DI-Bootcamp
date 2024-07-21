// shop.js

const products = require('./products');

function findProductByName(productName) {
    const product = products.find(prod => prod.name.toLowerCase() === productName.toLowerCase());
    return product;
}

// Example usage
console.log(findProductByName('Laptop'));
console.log(findProductByName('T-shirt'));
console.log(findProductByName('Backpack'));
console.log(findProductByName('Watch')); // Example for a product not in the list
