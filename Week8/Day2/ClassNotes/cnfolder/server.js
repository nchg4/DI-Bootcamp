const express = require('express');
const cors = require('cors');
const{ router } = require('./routes/product.router.js')

const app = express();

// body parser --These two lines are a MUST!
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// cors
app.use(cors())

// port || 3003 --listen to the port that is already there OR if there is none 3001
app.listen(process.env.PORT || 3003, () =>{
    console.log(`run on ${process.env.PORT || 3003}`);
});

/** server 
 * |_ config = connecting to database
 * |_ models = queries to database/files
 * |_ controllers
 * |_ routes
 */

app.use('/',router);