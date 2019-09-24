var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/code-snippets';

var codeSnippetsSchema = new mongoose.Schema({
    id: {type: Number, index: true},
    title: {type: String},
    description: {type: String},
    author: {type: String} 
});


mongoose.connect(url, {useNewUrlParser: false});

module.exports.Mortgages = mongoose.model('code-snippets', mortgagesSchema);

