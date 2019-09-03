const request = require('request');

module.exports = (req, res) => {
    var remoteFilePath = req.params.remoteFilePath;
    request.get(remoteFilePath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var fileBody = body;
            fileBody = fileBody.split(/\r\n|\r|\n/);
            res.send(fileBody);
        }
    })
}