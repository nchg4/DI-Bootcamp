const express =require("express");

let users =[
    {name:'Noam',age:22},
    {name: 'Ido', age: 23},
    {name: 'Maya', age:21}
];

const app =express();

// app.get()
// app.post()
// app.delete()
/** etc. */

app.listen(5000, ()=>{
    console.log('run on 5000');
})
console.log(__dirname+'/public');

// app.use('/',express.static(__dirname))

app.get('/users',(req,res)=>{
    res.json(users)
});