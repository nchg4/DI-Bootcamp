const { log } = require('console');
const http = require('http');

const server = http.createServer((request, response) =>{
    /**send response */
    console.log(request.method);
    let users =[
        {name:'Noam',age:22},
        {name: 'Ido', age: 23},
        {name: 'Maya', age:21}
    ]

    response.end(JSON.stringify(users));
});

server.listen(3001);





