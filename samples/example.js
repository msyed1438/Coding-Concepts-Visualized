const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {Mortgages} = require('../model/mongoDb.js');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(cors());


app.get('/:number', function(req, res) {
    // console.log('getting here');
    
    // console.log('__dirname: ', __dirname);
    // res.locals.id = req.params.number;
    // console.log(res.locals.id);
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});


app.get('/api/price/:priceId', function(req, res) {
    let queryId = req.params.priceId;
    Mortgages.findOne({'id': queryId})
    .then((data) => {
        console.log('This is the data from the Mortgages: ', data);
        res.status(201);
        res.send(data);
    })
});



const port = process.env.PORT || 3008;

app.listen(port, function() {
    console.log(`Server is listening on port: ${port}`);
});