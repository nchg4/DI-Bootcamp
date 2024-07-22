const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } =process.env;

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT, 
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false} ,
    }
})

async function getVersion(){
    try {
        const result = await db.raw("select version()")
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// getVersion()

/**Getting items from db */

// db("products")
// .select("id","name","price")
// // .where({id:12})
// .then(rows => {
//     console.log(rows);
// })
// .catch(err=>{
//     console.log(err);
// })


/**Update */

// db("products")
// .update({name: ' iPhone 17', price: 1700}, ["id","name"])
// .where({id: 1})

// // .returning('*')
// .then((result)=>{
//     console.log(result);
// });


/**Adding a product */

// db('products')
// .insert(
//     [
//     {name: 'iPhone21', price:2000},
//     {name: 'iPad19', price:1650},
//     ], 
//     ["id", "name","price"]
// )
// .then((result)=>{
//     console.log(result);
// });


/**Deleting */

// db('products')
// .where({id:4})
// .del()
// .returning('*')
// .then((res)=> console.log(res));


/**Select all(*) */

// db.raw('select * from products')
// .then((res) =>{
//     console.log(res.rows);
// });

/**Select one specific */

// db.raw('select * from products where id = 3')
// .then((res) =>{
//     console.log(res.rows);
// });

/**or */

// const id =5
// db.raw('select * from products where id =' + id)
// .then((res) =>{
//     console.log(res.rows);
// });

/**or/and */

const id =7
console.log('select * from products where id = ?')
db.raw('select * from products where id = ?', 7)
.then((res) =>{
    console.log(res.rows);
});
