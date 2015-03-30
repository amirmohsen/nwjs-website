var
	fs = require('fs'),
	marked = require('marked');

var methods = {

	markdown: function (filename) {
	    var markdownFile = fs.readFileSync(__dirname + '/views/docs/' + filename, 'utf8');
	    markdownFile = marked(markdownFile);

	    return markdownFile;
	}
};

module.exports = methods;