/**Using a DOM property, retrieve the h1 and console.log it.*/
const h1Element = document.querySelector('article h1'); 
const h1TextContent = h1Element.textContent; 
console.log(h1TextContent); 


/** Using DOM methods, remove the last paragraph in the <article> tag.*/
const elementP = document.getElementById('lastPg');
elementP.remove();
// console.log(elementP);


/**Add a event listener which will change the background color of the h2 to red, when it’s clicked on. */
// const h2Element = document.querySelector('chocolate-heading');
// h2Element.addEventListener('click',function() {
//     h2Element.style.backgroundColor = 'red'; 
// });


/**Add an event listener which will hide the h3 when it’s clicked on (use the display:none property). */
document.addEventListener('DOMContentLoaded', function() {
    const historyHeading = document.getElementById('historyHeading');

    historyHeading.addEventListener('click', function() {
        historyHeading.style.display = 'none'; 
    });
});


/**JavaScript code to make paragraph text bold on button click */
const boldButton = document.getElementById('boldButton');
const unboldButton = document.getElementById('unboldButton');
const paragraphs = document.getElementsByTagName('p');

boldButton.addEventListener('click', function() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = 'bold';
    }
});

unboldButton.addEventListener('click', function() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = 'normal';
    }
});
