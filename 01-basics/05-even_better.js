//
// now you're playing with portals...
//

/**
 * Find words that match a given criteria.
 *
 * @param listOfWords {array} a list of words
 * @param regex {RegExp} a regular expression
 */
function findWordsInList(listOfWords, regex) {
    return listOfWords.filter(regex.test, regex);
}


// but why wouldn't you just do it inline?


(function () {



    var fruits = 'apples oranges grapes strawberries bananas lemons'.split(' '),
        endsInES = fruits.filter(RegExp.prototype.test, /es$/);



    console.log(endsInES);




})();





