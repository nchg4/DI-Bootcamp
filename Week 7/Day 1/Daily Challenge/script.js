// 1st Daily Challenge:
function sortWords(words) {
    return words.sort();
}

function makeAllCaps(words){
    return new Promise((resolve, reject) => { 
        const allStrings = words.every(word => typeof word === 'string');
        
        if (allStrings) {
            const uppercasedWords = words.map(word => word.toUpperCase());
            resolve(uppercasedWords); 
        } else {
            reject("Not all elements are strings.");  
        }
    });
}

// Example usage:
// 1. Non-string element in array
makeAllCaps([1, "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error)); // Output: Not all elements are strings.

// 2. All elements are strings
makeAllCaps(["apple", "pear", "banana"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result))
    .catch(error => console.log(error)); // Output: ["APPLE", "BANANA", "PEAR"]

// 3. All elements are strings, uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) // Output: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error));
