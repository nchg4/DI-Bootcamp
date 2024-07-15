/** DOM */
/**Document Object Model
 **/

/**find/access element in the HTML page */

/**finding by ID: */
/** getElementById , returning ONLY one element! */
// document.getElementById("firstdiv");

// let div = document.getElementById("firstdiv");
// console.log(div);

// let h2 = document.getElementById("h2infirstdiv")
// console.log(h2);


/**finding by ID: */
/** tag/class name */
/**getElementsByClassName, getElementsByTagName */
// let divs = document.getElementsByTagName('div');
// console.log(divs[0]);

// let elements = document.getElementsByClassName('colorred');
// console.log(elements[1]);

// let elem = document.querySelector('div .colorred');
// console.log(elem);

// let elems = document.querySelectorAll('div #firstdiv')
// console.log(elems);


/** textContext / innertext / innerhtml */

let h2 = document.getElementById('h2infirstdiv');
console.log(h2);
// h2.innerText = 'New header 222'
// h2.textContent = 'Bla bla bla'
// h2.innerHTML = '<span style="color: red,">Hello</span>'

h2.setAttribute('class', 'coloryellow') // this is defined in the html doc. 
/**can set an attribute that HTML doesnt know: ex: */
// h2.setAttribute('userid', '1234567')

let h2class = h2.getAttribute('class')

// console.log(h2class);

h2.style.color = 'cyan'
h2.style.backgroundColor = '#ccc'



/**Adding an element */
let h3header = document.createElement('h3');
h3header.innerText = 'my h3 header';

console.log(h3header);
h3header.style.color = "red";

let div = document.getElementById('firstdiv')
console.log(div);

div.appendChild(h3header);

/**removing an element */

div.removeChild(h2);


/**editing in bosy */
let body = document.getElementsByTagName('body')[0];
// console.log(body[0]);

body.appendChild(document.createElement('footer'))

/**methods: */
/**children */
console.log(div.children[0]);

/**firstElementChild/ lastElementChild */
console.log(div.firstElementChild);
console.log(div.lastElementChild);



/**parentNode */
/**getting the name of where smthing is located..
 * h3.parentnode = div
 * h3.parentnode.parentnode = body
 * h3.parentnode.parentnode.parentnode =html
 * etc.
 */

// console.log(h3header.parentNode.parentNode.parentNode);


/**next elementsibling/ previouselementsibling */
console.log(h3header.previousElementSibling.parentNode);

/**adding class/es */
div.classList.add('text22', 'textalignleft');
/**remove class/es */
div.classList.remove('colorred');