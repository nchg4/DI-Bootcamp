// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(){
    const morseObject = JSON.parse(morse);
    // console.log("morseObject:", morseObject);
    return new Promise((resolve, reject) => {
        if (morse.length === 0){
            reject("Morse string is empty")
        }else{
            const morseObject = JSON.parse(morse);
            resolve(morseObject);
        }
    });
}

function isWordOk(word, possibleLetters){
    const userLetters = word.split("")
    return userLetters.every((letter) => !possibleLetters.includes
    (letter))
}

function toMorse(morseJS) {
    const word = prompt("Enter a word:");
    return new Promise((resolve, reject) => {
        
    });
}

function convertWordToMorse(word, morseJS){
    const letters = word.split("")
    for (const letter of letters){
        console.log(morseJS[letter]);
    }
}

toJs()
.then((morseObj) => toMorse(morseObj))
.then((res) => console.log(res))
.catch(err => console.error(err));


