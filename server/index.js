const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const readline = require('readline');
const request = require('request');


app.use(parser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, './../dist')))

app.use(morgan('dev'));


app.get('/jsfile/:remoteFilePath', (req, res) => {
    var remoteFilePath = req.params.remoteFilePath;
    request.get(remoteFilePath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var fileBody = body;
            console.log('This is the file body: ', JSON.stringify(fileBody));
            fileBody = fileBody.split(/\r\n|\r|\n/);
            console.log('The file body after splitting: ', fileBody);
            res.send(fileBody);
        }
    })
})


let port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})