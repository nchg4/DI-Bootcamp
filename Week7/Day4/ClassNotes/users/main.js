/**
 * info.js -> module with a function getUsers
 * getUsers returns the users array from this api
 *  https://jsonplaceholder.typicode.com/users
 * 
 * in main.js - get the array and log
 * 
 * use es6 module
 */

import { getUsers } from "./info";

getUsers(" https://jsonplaceholder.typicode.com/users").then(users) =>
    console.log(users);