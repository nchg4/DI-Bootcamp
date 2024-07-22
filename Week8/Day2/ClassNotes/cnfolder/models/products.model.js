const { db } = require('../config/db.js');

const _getAllProducts = () => {
    return db('products').select('id', 'name', 'price').orderBy('id')
};

const _insterProduct = (name,price)=>{
    return db('products').insert({name,price},['id','name','price'])
}

module.exports = {
    _getAllProducts,
    _insterProduct
};