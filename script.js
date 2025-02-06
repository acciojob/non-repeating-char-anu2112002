function firstNonRepeatedChar(str) {
    str = str.toLowerCase();
    let characterCount = {};
    for (let char of str) {
        if (characterCount[char]) {
            characterCount[char] += 1;
        } else {
            characterCount[char] = 1;
        }
    }
    for (let char of str) {
        if (characterCount[char] === 1) {
            return char;
        }
    }
    return null;
}

// Do not change the code below
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
