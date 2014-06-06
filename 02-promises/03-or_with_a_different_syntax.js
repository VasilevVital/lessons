

var Q = require('./q');


function tellMeLater(message) {
    return Q.Promise(function (resolve, reject, notify) {
        setTimeout(function () {
            notify('Any time now...');
        }, 1000);

        setTimeout(function () {
            notify('It\'s going to be awesome...');
        }, 2000);

        setTimeout(function () {
            resolve(message);
        }, 3000);
    });
}

(function () {
    var log = console.log.bind(console),
        warn = console.warn.bind(console),
        error = console.error.bind(console);

    tellMeLater('Hello, world!').then(log, error, warn);
})();

console.log('Stay tuned for an important announcement...');





