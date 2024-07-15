// let str = [
//     {
//         "id": 20,
//         "name": "John",
//         "email": "john@gmail.com",
//         "password": "HEAT1234!"
//     }
// ];
// console.log(JSON.parse(str));


//XML format
`<users>
    <users>
        <id>22</id>
        <name>Noam</name>
        <email>noam@gmail.com</email>
        <password>*******</password>
    </users>
</users>`


let users = [
    {id: 1, name: "Or", password: "cjkwdckjw", username: "or1393"},
    {id: 1, name: "Rinat", password: "hcjkwdhbc", username: "rinat363"},
    {id: 1, name: "Ells", password: "cndwjc", username: "Ella0986"},

]

const filterJson = (key, value) => {
    if(key === "password") return undefined
    if(key === "id") return value + '@gmail.com'
}


let usersJSON = JSON.stringify(users);
console.log(usersJSON);











