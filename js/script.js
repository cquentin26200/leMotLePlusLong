const mixWord = (word) => {
    const mix = word.split("").sort(() => Math.random() -0.5);
    mix.join(",") !== word ? console.log(mix) : console.log(`${mix} : mot complet`);
}

mixWord("cornichon");