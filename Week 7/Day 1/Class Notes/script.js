// /** Async in JS */

// // setTimeout
// // setInterval

// // console.log('before');

// // setTimeout(()=> {
// //     console.log('in set timeout');
// // }, 1000);

// // console.log('after');

// // // Syncc 

// // function getX(){
// //     setTimeout(()=>{
// //         return 5
// //     }, 2000);
// // };

// // function getY(){
// //     return 6
// // };

// // function getXY(){
// //     let x = getX();
// //         console.log("x=>", x);
    
// //     let y = getY();
// //     console.log("y=>", y);

// //     console.log(x+y);
// // };

// // getXY();

// /** Callback  */ //a function that is executed in another function
// // function myCallback(){
// //     console.log('callback executed');
// // };

// // function exeCallback(f){
// //     f()
// // };

// // exeCallback(myCallback)

// // array.forEach(
// //     (element) => {  }

// // );

// // const sum = (a,b) => {
// //     return a+b 
// // }

// // function exeCallback(f){
// //     return f(a,b)
// // }

// // exeCallback(sum())






// // function getX(f){
// //     setTimeout(() => {
// //         f(5)
// //     }, 2000);
// // }

// // function getY(f){
// //     getX((x) => {
// //         f(6)
// //     }, 3 * 1000);
// // }

// // function getXY(){
// //     getX((x) => {
// //         console.log("x=>", x);
// //         getY((y) => {
// //             console.log("y=>", y);
// //             console.log(x+y);
// //         })
// //         // let y = getY();
// //         // console.log(y);
// //         // console.log(x+y);
// //     });
// // }







// /** Promise */
// /** pending */
// /** fulfiled -> resolve */
// /** fulfiled -> reject */

// let p = new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         resolve(5);
//         // reject(55);
//     }, 2000);
// });

// // console.log(p);
// p
// .then((x) => {
//     console.log(data);
// })
// .catch(a => {
//     console.log(a);
// })



// function getX(f){
//     setTimeout(() => {
//         f(5)
//     }, 2000);
// }

// function getY(f){
//     getX((x) => {
//         f(6)
//     }, 3 * 1000);
// }

// function getXY(){
//     getX((x) => {
//         console.log("x=>", x);
//         getY((y) => {
//             console.log("y=>", y);
//             console.log(x+y);
//         })
//     });
// } 
// // getXY();

 
// const flip = () => {
//     const coin = Math.floor(Math.random() *2)
//     return coin === 0 ? 'head': 'tails';
// };

// // console.log(flip());

// const flipCoin = new Promise ((res,rej)=>{
//     setTimeout(() =>{
//         const flipresult = flip();
//         if(flipCoin === 'head'){
//             res('you win=>' + flipresult);
//         } else{
//             rej('you lose',flipresult);
//         }
//     }, 2000);
// });

// flipCoin.then((result) =>{
//     console.log(result);
// })
// .catch(result => {
//     console.log(result);
// });


/** Promises sttic methods */

// Promise.resolve
// Promise.reject

// function getX(){
//     return new Promise((res) => {
//         resolve(5)
//     })
//     return Promise.reject(333)
// }
// console.log(getx().catch(e=>console.log(e)));

/**
 * Promise.all(array)
 * Promise.allSettled(array)
 * Promise.race(array)
 * Promise.any(array)
 */

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("resolve promise1");
    }, 2*1000)
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        // console.log("resolve promise2");
        rej('reject promisef2')
    }, 3*1000)
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("resolve promise3");
    }, 4*1000)
})

//all promises must be resolved w promise.all
Promise.all([promise1, promise2, promise3])
.then(items => {
    console.log(items);
})
.catch((err) => {
    console.log("error=>", err);
});


/**marco task vs micro task */