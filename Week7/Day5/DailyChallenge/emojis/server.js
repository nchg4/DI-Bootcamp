const express = require('express')

const app = express()

app.listen(3001, ()=> {
    console.log('run on 3001');
})


app.use("/", express.static(__dirname + "/public"))

app.get("/emojis", (req,res) =>{
    const randomIndx = Math.floor(Math.random() * emojis.length);
    const randomEmoji =  emojis[randomIndx];

    res.json({randomEmoji });
})

