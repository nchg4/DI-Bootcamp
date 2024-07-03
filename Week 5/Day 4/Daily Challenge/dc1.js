/**Part I */
function myAlert(){
    alert('Hello')
}

setTimeout(myAlert, 2000);

console.log(myAlert);


/**Part II */
function addP(){
    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'Hello World!';
    document.getElementById('container').appendChild(paragraph);
}

setTimeout(addP, 2000);

/**Part III */
var intervalId = setInterval(addNewP, 2000);

function addNewP() {
    var container = document.getElementById('container');
    var paragraphs = container.getElementsByTagName('p');

    var paragraph = document.createElement('p');
    paragraph.innerHTML = 'Hello World!!!';
    container.appendChild(paragraph);

    if (paragraphs.length === 5) {
        clearInterval(intervalId);
    }
}

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    clearInterval(intervalId);
});