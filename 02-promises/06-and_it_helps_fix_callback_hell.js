
var FS = require('fs'),
    Q = require('./q'),
    log = console.log.bind(console),
    err = console.error.bind(console);



FS.readFile('./data/message.txt', 'utf-8', function (err, data) {
    console.log(data);
});


FS.readFile('./will/cause/an/error.txt', 'utf-8', function (err, data) {
    console.log(err);
});


Q.nfcall(FS.readFile, './data/message.txt', 'utf-8')
    .then(log);


Q.nfcall(FS.readFile, './will/cause/an/error.txt', 'utf-8')
    .then(log, err);


