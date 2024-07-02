function displayNumbersDivisible(){
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        // console.log(i);
        if (i % 23 === 0){
            console.log(i);
            sum += i
        }
    }
    console.log("TOTAL SUM:" + ' ' + sum);
}
displayNumbersDivisible()


console.log();