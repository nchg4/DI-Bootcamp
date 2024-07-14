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
}`;

function toJs() {
    return new Promise((resolve, reject) => {
        if (morse.length === 0) {
            reject("Morse string is empty");
        } else {
            const morseObject = JSON.parse(morse);
            resolve(morseObject);
        }
    });
}

function isWordOk(word, possibleLetters) {
    const userLetters = word.split("");
    return userLetters.every((letter) => possibleLetters.includes(letter));
}

function toMorse(morseJS) {
    const possibleLetters = Object.keys(morseJS);
    const word = prompt("Enter a word:").toLowerCase();
    return new Promise((resolve, reject) => {
        if (!isWordOk(word, possibleLetters)) {
            reject("Word contains invalid characters.");
        } else {
            const result = { word: word, morse: convertWordToMorse(word, morseJS) };
            resolve(result);
        }
    });
}

function convertWordToMorse(word, morseJS) {
    const letters = word.split("");
    return letters.map(letter => morseJS[letter]).join(" "); // Join the Morse codes with a space
}

function joinWords(obj){
    const word = obj.word;
    console.log("word:", word);
    const morse = obj.morse
    console.log("morse:", morse);
    document.getElementById("word").innerText = word;
    const morseArray = morse.split(" ");
    morseArray.forEach((sign, i) => {
        const p = document.createElement("p");
        p.innerText = word[i] + " = " + sign;
        document.getElementById ("morse").appendChild(p);
    });
   
       
}

toJs()
    .then((morseObj) => toMorse(morseObj))
    .then((wordAndTranslation) => joinWords(wordAndTranslation))
    .catch((err) => console.error(err));
