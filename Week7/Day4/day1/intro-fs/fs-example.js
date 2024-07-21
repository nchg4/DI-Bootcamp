const fs = require("fs")
// import fs from "fs"


// console.log("before");
// // try {
// //   const data = fs.readFileSync("info", "utf-8");
// //   console.log(JSON.parse(data));
// // } catch (error) {
// //   console.log(error);
// // }

// fs.readFile("info.json", "utf-8", (err, data) => {
//   if (err) return console.log(err.message);

//   console.log(data);
// });
// console.log("after");

/** write */

// let data = [{ name: "ddd", age: 231 }];
// fs.writeFile("users.json", JSON.stringify(data), "utf-8", (err) => {
//   if (err) return console.log(err.message);
// });

/** append */
// let data = "123";
// fs.appendFile("newfile", data, "utf-8", (err) => {
//   if (err) return console.log(err.message);
// });

fs.copyFile("newfile", "newfile2", (err) => {
  if (err) return console.log(err.message);
  console.log("copy!!!");
});
