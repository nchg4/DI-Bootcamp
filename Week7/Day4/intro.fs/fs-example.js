const fs = require('fs');


// try{
//     const data = fs.readFileSync('info.txt', 'utf-8');
//     console.log(JSON.parse(data));
// }catch(error){
//     console.log(error);
// }

// fs.readFile("info", "utf-8", (err, data) =>{
//     if(err) return console.log(err);

//     console.log(data);
// });
// console.log("after");


/**write */

// let data = '"Noam"'

// fs.writeFile('users.json', data, 'utf-8', (err)=>{
//     if (err) return console.log(err.message);
// });
// console.log(data);


/** append */

// let data = "abc222"
// fs.appendFile('newfile', data, 'utf-8', err=>{
//     if (err) return console.log(err.message);
// })

fs.copyFile('newfile', 'newfile2', err => {
    if (err) return console.log(err.message);
    console.log("copy!!!");
});