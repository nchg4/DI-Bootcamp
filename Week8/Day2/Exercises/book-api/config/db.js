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
getVersion()


module.exports = db; 