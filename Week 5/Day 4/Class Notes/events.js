/** Events:
 * interaction w the user;
 * clicking, double clicking, hovering, typing, 
 * clicking enter, search, etc
 * Basically mouse moving, keyboard moving, etc.
 */

// way one to add an event
// function clickMe(){
//     console.log('Hello');
// }

// // way two to add an event
// function clickMe(evt){
//     console.log(evt.target);
// }

// // let click = document.getElementById('btn');

// // click.addEventListener('click', function(e){
// //     console.log(e.target);
// // });



// function getvalue(){
//     console.log('Hello');
// }

// // let email = document.getElementById('email')
// // function getvalue(){
// //     console.log(email.ariaValueMax, email.nodeType, email.id);
// // }

// function getvalue(e){
//     console.log(e.target.value, e.target.type, e.target.id);
// }

// let pass = document.getElementById('password');
// // console.log(pass);
// pass.addEventListener('input', function(e){
//     console.log(e.target.value);
// })


// let mydiv = document.querySelector('div');
// // this will return the first div in my page
// // check:
// console.log(mydiv);

// mydiv.style.width = '200px';
// mydiv.style.height = '200px'
// mydiv.style.border = '2px solid #000'

// mydiv.addEventListener('mouseover', )

// function changeBdRed(e){
//     e.target.style.backgroundColor = 'red'}



/**Bubbling */
// const root = document.getElementById('root');
// const main = document.getElementById('main');
// const innerbutton = document.getElementById('innerbutton');

// // console.log(divroot, divmain, button);
// divroot.addEventListener('click', divrootclick, false)
// divmain.addEventListener('click', divmainclick, false)
// button.addEventListener('click', buttonclick, false)

// function divrootclick(e){
//     console.log('click on root div');
//     e.stopPropagation();

// }

// function divmainclick(e){
//     console.log('click on main main');
//     e.stopPropagation();
// }

// function buttonclick(e){
//     console.log('click on root button');
//     e.stopPropagation();
// }


let username = document.getElementById('username');
let email = document.getElementById('email');

function formsubmit(e){
    e.preventDefault();

    // if(username.value.trim()  == " "){
//     alert('Please enter a valid username')
// }
console.log(e.target.elements["username"].value); 
    e.target.submit()
}
   












