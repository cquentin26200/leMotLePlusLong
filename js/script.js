function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function mixWord (word) {
    for (let i = 0; i < word.split("").length; i++) {
        const rdmLetter = word[randomNumber(0, word.split("").length)];
        console.log(rdmLetter);
    }
}

mixWord("oui");