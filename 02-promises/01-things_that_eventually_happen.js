



function tellMeLater(message, callback) {
    setTimeout(function () {
        callback(message);
    }, 1000);
}


tellMeLater('Hello, world!', function (message) {
    console.log(message);
});



console.log('Stay tuned for an important announcement...');



