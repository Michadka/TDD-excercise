function hangman(word, letter) {
    return (word.toUpperCase().split(letter.toUpperCase()).length - 1);
}
module.exports = hangman;
