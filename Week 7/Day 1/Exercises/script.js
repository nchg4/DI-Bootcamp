/** 🌟 Exercise 1 : Comparison:*/
function compareToTen(num){
    return new Promise((resolve, reject) => {
        if (num <= 10){
            resolve('The number is less or equal to 10')}
        else {
            reject('The number is greater than 10')
        }
    })
}
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))


/** 🌟 Exercise 2 : Promises*/
function myPromiseFunction(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    })
}

myPromiseFunction()
    .then(result => console.log(result)) 
    .catch(error => console.log(error));


/** 🌟 Exercise 3 : Resolve & Reject*/
    const promise = Promise.resolve(3);
    promise.then((res) => console.log(res)).catch((err) => console.error(err));

    const promise2 = Promise.reject("boo");
    promise2.then((res) => console.log(res)).catch((err) => console.error(err));
