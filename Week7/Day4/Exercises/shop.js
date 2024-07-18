const products = require('./products');

function findProductByName(productName) {
    const product = products.find(prod => prod.name === productName);
    return product;
}


// console.log(findProductByName("Coffee Maker"));

