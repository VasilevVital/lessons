

var Q = require('./q');


//
// once a promise is resolved, it remains that way.
// it's kind of like a state machine.
//
// If you call then on a resolved or rejected promise,
// it will be called as if it had always been there.
//


function tellMeLater(message) {
    return Q.Promise(function (resolve, reject, notify) {
        resolve(message);
    });
}

(function () {
    var promise = tellMeLater('Hello, world!');

    setTimeout(function () {
        promise.then(function (message) {
            console.log(message);
        });
    }, 1000);

})();

console.log('Stay tuned for an important announcement...');





