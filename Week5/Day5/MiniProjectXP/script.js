generateColors()
let currentColor
listenToMain()
let isMousePressed = false
const button = document.querySelector('.clear button')
listenToClearButton()



function listenToClearButton(){
    button?.addEventListener('click', clearCanvas)
}

function clearCanvas(){
    currentColor = null
    const squares = document.querySelectorAll('#main > div')
    for (const square of squares){
        square.style.backgroundColor = 'white'
    }
    button.style.backgroundColor = 'white'
}

function listenToMain(){
    const main = document.getElementById('main')
    main.addEventListener('mousedown', handleClick)
    main.addEventListener('mousemove', handleMove)
    document.body.addEventListener('mouseup', handleMouseReleased)
}

function handleClick(){
if (currentColor == null) return
isMousePressed = true
}

function handleMove(e){
if (!isMousePressed) return
// console.log('Your mouse is pressed');
// console.log('Coordinates:', e.x, e.y);
const hoveredDiv = document.elementFromPoint(e.x, e.y)
hoveredDiv.style.backgroundColor = currentColor
}

function handleMouseReleased(){
    isMousePressed = false
}


function generateColors(){
    const colorDivs = document.querySelectorAll('.color')
    // console.log('colorDivs:', colorDivs);
    for (const colorDiv of colorDivs){
        const randomColor = generateRandomColor()
        colorDiv.style.backgroundColor = randomColor
        colorDiv.dataset.color = randomColor
        colorDiv.addEventListener('click', setCuurentColor)
    }
}

function generateRandomColor(){
   const hex =  Math.floor(Math.random()*16777215).toString(16);
   return '#' + hex
}

function setCuurentColor(e){
    const chosenColor = e.target.dataset.color
currentColor = chosenColor
currentColor =  e.target.dataset.color;
button.style.backgroundColor = chosenColor
}

