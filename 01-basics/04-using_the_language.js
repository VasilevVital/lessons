
// problem: these enhancements require ECMAScript 5 support.
// unfortunately, Internet Explorer 6-8 did not implement
// ECMAScript 5.
//
// http://kangax.github.io/compat-table/es5/
//
// The problem is that every other browser did, and the
// performance is vastly superior. It is the best
// practice to do the right thing and polyfill support
// as necessary.
//
// eg.
//
// <!--[if lt IE 9]>
// <script src="//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
// <![endif]-->
//


/**
 * Find words that match a given criteria.
 *
 * @param listOfWords {array} a list of words
 * @param regex {RegExp} a regular expression
 */
function findWordsInList(listOfWords, regex) {
    // getting there...
    return listOfWords.filter(function (word) {
        return regex.test(word);
    });
}

