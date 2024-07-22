const {_getAllProducts, _insterProduct} = require('../models/products.model.js');

const getAllProduct = (req,res) =>{
    _getAllProducts()
    .then(result => {
        res.json(result)
    })
    .catch(e=>{
        res.status(404).json({message: "something went wrong!!!"})
    })
}

const insertProduct = (req,res)=>{
    const{name,price} = req.body;
    _insterProduct(name,price)
    .then((result) =>{
        getAllProduct(req,res)
    })
    .catch((e)=>{
        res.status(404).json({message:['Something went wrong!!!']})
    })
}

module.exports={
    getAllProduct,
}