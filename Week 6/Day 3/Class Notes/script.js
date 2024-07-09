/**
 Given n, take the sum of the digits of n.
 If that value has more than one digit,
 continue reducing in this way until a single-digit
 number is produced.
 This is only applicable to the natural numbers.
 Examples:
  16  - -> 1 + 6 = 7
  942  - -> 9 + 4 + 2 = 15  - -> 1 + 5 = 6
  132189  - -> 1 + 3 + 2 + 1 + 8 + 9 = 24  - -> 2 + 4 = 6
  493193  - -> 4 + 9 + 3 + 1 + 9 +3 = 29  - -> 2 + 9 = 11  - -> 1 + 1 = 2
 */

//my answer:
  function oneDigSum(n) {
    while (n > 10) {
        let sum = 0;
        
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
    }
    
    return n;
}


////teachers answe:
// function calcDigit(num){
//     let arr = new String(num).split("")
//     console.log(arr);
//     let ret = 0;
//     for (let i in arr){
//         ret += Number(arr[i])
//     }
//     console.log(ret);
//     if(ret<10){
//         return ret
//     }
//     return calcDigit(ret)
// }
// calcDigit(129839273)


///now same function w reduce:
function calcDigit(num){
    let arr = new String(num).split("");
    let ret = arr.reduce((total, item) => total + Number(item), 0);
    return ret < 10 ? ret : calcDigit(ret);
}
calcDigit(8908908908)