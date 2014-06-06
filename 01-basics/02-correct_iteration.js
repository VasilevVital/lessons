

// first thing is to iterate correctly. An array is
// an object, however it has a property called length
// which tells us how to iterate.
//
// for...in syntax is meant for iterating over object
// keys, not array indicies.
//



/**
 * Find words that match a given criteria.
 *
 * @param listOfWords {array} a list of words
 * @param regex {RegExp} a regular expression
 */
function findWordsInList(listOfWords, regex) {
    var i, word,
        result = [];

    for (i = 0; i < listOfWords.length; ++i) {
        word = listOfWords[i];

        if (regex.test(word)) {
            result.push(word);
        }
    }

    return result;
}

