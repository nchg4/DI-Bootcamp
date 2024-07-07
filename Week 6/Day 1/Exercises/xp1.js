// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

/*ANSWER: */
/**if we useconst instead of let we will run into a problem where the code 
 * will reassign 'a' to '3' we will recieve a typeError  */

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
/*ANSWER: */
/** 1)'a' would be initialized with a value of '0' if  const id used
 * 2) We will get a typeError  bc  const cannot be reassigned  
 * so a = 5 will not work  and will  cause a typeError.
*/

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
/*ANSWER: */
/**
 * 1) In funcFour the value "hello" is set to window.a
 * 2)  in funcFive when it tries to access a, it doesn't
 *  find a local definition, so its looking for 'a' in the broader
 *  global scope.
 */

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
/*ANSWER: */
/**an alert will occue inside funcSix */



//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
//ANSWER:
/**This will not affect the output directly visible 
 * in the funcSix function because a is declared locally
 *  with const and let. */