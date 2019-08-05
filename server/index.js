const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');



app.use(parser.json());
app.use(cors());
app.use('/', express.static(path.join(__dirname, './../client/dist')))

app.use('/hotels/:hotelId', express.static(path.join(__dirname, './../client/dist')))
app.use(morgan('dev'));



let port = process.env.PORT || 3005;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})