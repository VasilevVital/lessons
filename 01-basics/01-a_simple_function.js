

/**
 * Find words that match a given criteria.
 *
 * @param listOfWords {array} a list of words
 * @param regex {RegExp} a regular expression
 */
function findWordsInList(listOfWords, regex) {
    var key, word,
        result = [];

    // bad: arrays are objects, but it's better to use for (;;) instead
    for (key in listOfWords) {
        //
        // you need to do this because someone may have
        // messed around with Array.prototype
        //
        if (!listOfWords.hasOwnProperty(key)) {
            continue;
        }

        word = listOfWords[key];

        if (regex.test(word)) {
            result.push(word);
        }
    }

    return result;
}


