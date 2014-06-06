

// remember: javascript is function scope.
// vars are hoisted to the top of their scope


/**
 * Find words that match a given criteria.
 *
 * @param listOfWords {array} a list of words
 * @param regex {RegExp} a regular expression
 */
function findWordsInList(listOfWords, regex) {
    var result = [];

    // okayish... but doesn't understand what ECMAScript 5 introduced
    listOfWords.forEach(function(word) {
        if (regex.test(word)) {
            result.push(word);
        }
    });

    return result;
}


