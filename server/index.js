const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const fileGetter = require('./controllers/remoteFileReaderController');
const {sign_s3} = require('./controllers/s3UploadController');



app.use(parser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, './../dist')))
app.use(morgan('dev'));

app.get('/jsfile/:remoteFilePath', fileGetter);
app.post('/sign_s3', sign_s3);



let port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})