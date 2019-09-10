var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/snippets', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

    console.log('Database connected successfully at mongodb://localhost/snippets');

    var snippetSchema = new mongoose.Schema({
        title: String,
        author: String,
        description: String,
        chunks: []
      });
});