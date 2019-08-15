const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fs = require('fs');
const request = require('request');
const AWS = require('aws-sdk');
const { accessKey, secretkey } = require('./awsConfig');


AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretkey
});

var s3 = new AWS.S3();


app.use(parser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, './../dist')))

app.use(morgan('dev'));


app.get('/jsfile/:remoteFilePath', (req, res) => {
    var remoteFilePath = req.params.remoteFilePath;
    request.get(remoteFilePath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var fileBody = body;
            fileBody = fileBody.split(/\r\n|\r|\n/);
            res.send(fileBody);
        }
    })
})


let port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})