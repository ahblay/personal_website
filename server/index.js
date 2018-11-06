const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
var {PythonShell} = require('python-shell');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.post('/receivePrefs', callName);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
});

function callName(req, res) {
    var myPythonScriptPath = '/users/abel/desktop/personal_website/server/data_handling.py';

    // Use python shell
    var pyshell = new PythonShell(myPythonScriptPath);

    var data = JSON.stringify(req.body);
    pyshell.send(data);

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
        if (err){
            throw err;
        };

        console.log('finished');
    });
}

