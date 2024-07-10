// let str = `[
//     {
//         "id": 20,
//         "name": "John",
//         "email": "john@gmail.com",
//         "password": "HEAT1234!"
//     }
// ]`;
// console.log(JSON.parse(str));


//XML format
`<users>
    <users>
        <id>22</id>
        <name>Noam</name>
        <email>noam@gmail.com</email>
        <password>*******</password>
    </users>
</users>`;


let users = [
    {id: 1, name: "Or", password: "cjkwdckjw", username: "or1393"},
    {id: 1, name: "Rinat", password: "hcjkwdhbc", username: "rinat363"},
    {id: 1, name: "Ells", password: "cndwjc", username: "Ella0986"},
];

const filterJson = (key, value) => {
    if (key === "password") {
        return '*******';  // Mask the password
    } else {
        return value;  
    }
};

let usersJSON = JSON.stringify(users, filterJson, 2);
console.log(usersJSON);



console.log('before');

/**try and catch */
function x(){
    try {
        a;
    } catch (e) {
        console.log(e.name, e.message);
    }
    finally{
        console.log('finally block executed');
    }
    console.log('hello from x');
}


try {
    x();
} catch (e){
    console.log("error =>", e);
}


console.log('after');