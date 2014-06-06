
var Q = require('./q');


Q.longStackSupport = false;




function willCauseAnError() {
    Q.delay(1000).done(function explode() {
        throw new Error('I told you so...');
    });
}

willCauseAnError();


/*


Old And Busted
--------------

Q.longStackSupport = false; // default


/home/peterm/lessons/02-promises/q.js:126
                    throw e;
                          ^
Error: I told you so...
    at explode (/home/peterm/lessons/02-promises/07-and_even_makes_stack_traces_fun.js:12:15)
    at _fulfilled (/home/peterm/lessons/02-promises/q.js:787:54)
    at self.promiseDispatch.done (/home/peterm/lessons/02-promises/q.js:816:30)
    at Promise.promise.promiseDispatch (/home/peterm/lessons/02-promises/q.js:749:13)
    at /home/peterm/lessons/02-promises/q.js:557:44
    at flush (/home/peterm/lessons/02-promises/q.js:108:17)
    at process._tickCallback (node.js:419:13)


New Hotness
-----------


Q.longStackSupport = true;


Error: I told you so...
    at explode (/home/peterm/lessons/02-promises/07-and_even_makes_stack_traces_fun.js:12:15)
From previous event:
    at willCauseAnError (/home/peterm/lessons/02-promises/07-and_even_makes_stack_traces_fun.js:11:19)
    at Object.<anonymous> (/home/peterm/lessons/02-promises/07-and_even_makes_stack_traces_fun.js:16:1)


*/
