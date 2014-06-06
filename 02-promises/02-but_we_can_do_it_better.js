

// spec: https://github.com/promises-aplus/promises-spec
var Q = require('./q');


function tellMeLater(message) {
    var deferred = Q.defer(),
        promise = deferred.promise;

    setTimeout(function () {
        deferred.resolve(message);
    }, 1000);

    return promise;
}



tellMeLater('Hello, world!').then(function (message) {
    console.log(message);
});


console.log('Stay tuned for an important announcement...');



